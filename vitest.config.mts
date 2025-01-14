/**
 * @file Configuration - Vitest
 * @module config/vitest
 * @see https://vitest.dev/config
 */

import Notifier from '#tests/reporters/notifier'
import VerboseReporter from '#tests/reporters/verbose'
import pathe from '@flex-development/pathe'
import ci from 'is-ci'
import type { ConfigEnv, ViteUserConfig } from 'vitest/config'
import { BaseSequencer, type TestSpecification } from 'vitest/node'
import tsconfig from './tsconfig.json' with { type: 'json' }

/**
 * Create a vitest configuration.
 *
 * @see {@linkcode ConfigEnv}
 * @see {@linkcode ViteUserConfig}
 *
 * @param {ConfigEnv} env
 *  Configuration environment
 * @return {ViteUserConfig}
 *  Vitest configuration object
 */
function config(env: ConfigEnv): ViteUserConfig {
  return {
    ssr: {
      resolve: { conditions: tsconfig.compilerOptions.customConditions }
    },
    test: {
      include: ['src/**/__tests__/*.spec-d.mts'],
      outputFile: {
        blob: `.vitest-reports/${env.mode}.blob.json`,
        json: pathe.join('__tests__', 'reports', env.mode + '.json')
      },
      passWithNoTests: true,
      reporters: JSON.parse(process.env['VITEST_UI'] ?? '0')
        ? [new Notifier(), new VerboseReporter()]
        : env.mode === 'reports'
        ? [new VerboseReporter()]
        : [
          ci ? 'github-actions' : new Notifier(),
          'blob',
          'json',
          new VerboseReporter()
        ],
      sequence: {
        /**
         * Sorting and sharding algorithm provider.
         *
         * @see {@linkcode BaseSequencer}
         *
         * @extends {BaseSequencer}
         */
        sequencer: class Sequencer extends BaseSequencer {
          /**
           * Determine test file execution order.
           *
           * @public
           * @override
           * @async
           *
           * @param {TestSpecification[]} specs
           *  List of test file specifications
           * @return {Promise<TestSpecification[]>}
           *  Sorted test files
           */
          public override async sort(
            specs: TestSpecification[]
          ): Promise<TestSpecification[]> {
            return new Promise(resolve => {
              return void resolve(specs.sort((a, b) => {
                return a.moduleId.localeCompare(b.moduleId)
              }))
            })
          }
        }
      },
      typecheck: {
        allowJs: false,
        checker: 'tsc',
        ignoreSourceErrors: false,
        include: ['**/__tests__/*.spec-d.mts'],
        only: true,
        tsconfig: 'tsconfig.typecheck.json'
      }
    }
  }
}

export default config
