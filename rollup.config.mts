/**
 * @file rollup
 * @module config/rollup
 */

import { EXPORT_AGGREGATE_REGEX } from '@flex-development/export-regex'
import { STATIC_IMPORT_REGEX } from '@flex-development/import-regex'
import resolve from '@rollup/plugin-node-resolve'
import { ok } from 'devlop'
import type {
  NormalizedOutputOptions,
  OutputBundle,
  Plugin,
  PluginContext,
  RollupOptions
} from 'rollup'
import { dts as dtsBundle } from 'rollup-plugin-dts'
import pkg from './package.json' with { type: 'json' }

/**
 * The rollup configuration.
 *
 * @see {@linkcode RollupOptions}
 *
 * @const {RollupOptions} config
 */
const config: RollupOptions = {
  external,
  input: { index: './dist/index.d.mts' },
  output: { dir: 'dist', entryFileNames: '[name].d.mts', format: 'esm' },
  plugins: [resolve({ extensions: ['.d.mts', '.mts'] }), dts()]
}

export default config

/**
 * Create a plugin pack to bundle declaration files and fix `type` modifiers.
 *
 * @this {void}
 *
 * @return {Plugin[]}
 *  The plugin pack
 */
function dts(this: void): Plugin[] {
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
          }
        }

        return void this
      },

      /**
       * The plugin name.
       */
      name: 'dts:fix-type-modifiers'
    }
  ]
}

/**
 * Check if `source` is external.
 *
 * @this {void}
 *
 * @param {string} source
 *  The path to the imported module
 * @return {boolean}
 *  Whether `source` should be marked as external
 */
function external(this: void, source: string): boolean {
  return Object.keys(pkg.dependencies).includes(source)
}
