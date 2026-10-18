/**
 * @file rollup
 * @module config/rollup
 */

import listWorkspaces from '#utils/list-workspaces'
import { codecovRollupPlugin as codecov } from '@codecov/rollup-plugin'
import { EXPORT_AGGREGATE_REGEX } from '@flex-development/export-regex'
import { STATIC_IMPORT_REGEX } from '@flex-development/import-regex'
import { readPackageJson } from '@flex-development/mlly'
import pathe from '@flex-development/pathe'
import type { PackageJson } from '@flex-development/pkg-types'
import resolve from '@rollup/plugin-node-resolve'
import { ok } from 'devlop'
import ci from 'is-ci'
import type { Dirent } from 'node:fs'
import type {
  NormalizedOutputOptions,
  OutputBundle,
  Plugin,
  PluginContext,
  RollupOptions
} from 'rollup'
import cleanup from 'rollup-plugin-cleanup'
import { dts as dtsBundle } from 'rollup-plugin-dts'

/**
 * The rollup configuration.
 *
 * @see {@linkcode RollupOptions}
 *
 * @type {RollupOptions[]}
 */
export default listWorkspaces().flatMap((
  workspace: Dirent
): RollupOptions[] => {
  /**
   * The URL to the package directory.
   *
   * @const {URL} url
   */
  const url: URL = new URL(
    workspace.name + pathe.sep,
    pathe.pathToFileURL(workspace.parentPath + '/packages')
  )

  /**
   * The list of target files.
   *
   * @const {string[]} files
   */
  const files: string[] = [pathe.join(url.pathname, 'dist/index.d.mts')]

  // add mjs target file for non-types build.
  if (workspace.name !== 'docast' && !workspace.name.endsWith('-types')) {
    files.push(pathe.join(url.pathname, 'dist/index.mjs'))
  }

  /**
   * The package manifest.
   *
   * @const {PackageJson | null} manifest
   */
  const manifest: PackageJson | null = readPackageJson(url)

  return files.map((input: string): RollupOptions => {
    ok(manifest, 'expected `manifest`')
    ok(manifest.name, 'expected `manifest.name`')

    /**
     * The list of external dependencies.
     *
     * @const {string[]} external
     */
    const external: string[] = Object.keys(manifest.dependencies ?? {})

    /**
     * The list of plugins.
     *
     * @const {(Plugin | Plugin[])[]} plugins
     */
    const plugins: (Plugin | Plugin[])[] = []

    if (input.endsWith('.mjs')) {
      plugins.push(
        resolve(),
        cleanup({ comments: 'none' }),
        codecov({
          bundleName: manifest.name,
          debug: true,
          enableBundleAnalysis: ci,
          uploadToken: process.env['CODECOV_TOKEN']!
        })
      )
    } else {
      plugins.push(resolve({ extensions: ['.d.mts', '.mts'] }), dts(workspace))
    }

    return {
      /**
       * Determine if a module is external.
       *
       * @this {void}
       *
       * @param {string} source
       *  The module id
       * @return {boolean}
       *  Whether the `source` module is external
       */
      external(this: void, source: string): boolean {
        return external.includes(source)
      },
      input,
      output: [{ file: input, format: 'esm' }],
      plugins
    }
  })
})

/**
 * Create a plugin pack to bundle declaration files and fix `type` modifiers.
 *
 * @this {void}
 *
 * @param {Dirent} workspace
 *  The dirent representing the workspace
 * @return {Plugin[]}
 *  The plugin pack
 */
function dts(this: void, workspace: Dirent): Plugin[] {
  return [
    dtsBundle(),
    {
      /**
       * Re-add lost `type` modifiers.
       *
       * @see https://github.com/Swatinem/rollup-plugin-dts/issues/354
       *
       * @this {PluginContext}
       *
       * @param {NormalizedOutputOptions} options
       *  The normalized output options
       * @param {OutputBundle} bundle
       *  The output bundle object
       * @return {undefined}
       */
      generateBundle(
        this: PluginContext,
        options: NormalizedOutputOptions,
        bundle: OutputBundle
      ): undefined {
        for (const output of Object.values(bundle)) {
          if (output.type === 'chunk') {
            output.code = output.code.replace(EXPORT_AGGREGATE_REGEX, (
              match: string,
              type: string | undefined,
              exports: string,
              specifier: string | undefined
            ) => {
              ok(specifier, 'expected `specifier`')
              return type ? match : match.replace('export {', 'export type {')
            })

            output.code = output.code.replace(STATIC_IMPORT_REGEX, (
              match: string,
              type: string | undefined
            ) => {
              return type ? match : match.replace('import', 'import type')
            })

            void workspace
          }
        }

        return void this
      },

      /**
       * The plugin name.
       */
      name: 'dts:fix'
    }
  ]
}
