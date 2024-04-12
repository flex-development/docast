/**
 * @file Vitest Configuration
 * @module config/vitest
 * @see https://vitest.dev/config/
 */

import pathe from '@flex-development/pathe'
import { ifelse, includes, sift } from '@flex-development/tutils'
import ci from 'is-ci'
import {
  defineConfig,
  type ConfigEnv,
  type UserConfig,
  type UserConfigExport
} from 'vitest/config'
import { BaseSequencer, type WorkspaceSpec } from 'vitest/node'
import Notifier from './__tests__/reporters/notifier'

/**
 * Vitest configuration export.
 *
 * @const {UserConfigExport} config
 */
const config: UserConfigExport = defineConfig((env: ConfigEnv): UserConfig => {
  return {
    test: {
      include: ['**/__tests__/*.spec-d.ts'],
      outputFile: {
        json: includes(['benchmark', 'typecheck'], env.mode)
          ? pathe.join('__tests__', pathe.addExt(env.mode, 'json'))
          : '__tests__/report.json'
      },
      passWithNoTests: true,
      reporters: sift([ifelse(ci, null, new Notifier()), 'json', 'verbose']),
      sequence: {
        sequencer: class Sequencer extends BaseSequencer {
          /**
           * Determines test file execution order.
           *
           * @public
           * @override
           * @async
           *
           * @param {WorkspaceSpec[]} specs - Workspace spec objects
           * @return {Promise<WorkspaceSpec[]>} `files` sorted
           */
          public override async sort(
            specs: WorkspaceSpec[]
          ): Promise<WorkspaceSpec[]> {
            return (await super.sort(specs)).sort(([, file1], [, file2]) => {
              return file1.localeCompare(file2)
            })
          }
        }
      },
      typecheck: {
        allowJs: false,
        checker: 'tsc',
        ignoreSourceErrors: false,
        include: ['**/__tests__/*.spec-d.ts'],
        only: true,
        tsconfig: 'tsconfig.typecheck.json'
      }
    }
  }
})

export default config
