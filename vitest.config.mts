/**
 * @file Configuration - Vitest
 * @module config/vitest
 * @see https://vitest.dev/config
 */

import Notifier from '#tests/reporters/notifier'
import pathe from '@flex-development/pathe'
import ci from 'is-ci'
import {
  defineConfig,
  type ConfigEnv,
  type ViteUserConfig
} from 'vitest/config'
import pkg from './package.json' with { type: 'json' }
import tsconfig from './tsconfig.json' with { type: 'json' }

export default defineConfig(config)

/**
 * Create a vitest configuration.
 *
 * @see {@linkcode ConfigEnv}
 * @see {@linkcode ViteUserConfig}
 *
 * @this {void}
 *
 * @param {ConfigEnv} env
 *  Configuration environment
 * @return {ViteUserConfig}
 *  Root vitest configuration object
 */
function config(this: void, env: ConfigEnv): ViteUserConfig {
  return {
    resolve: {
      conditions: tsconfig.compilerOptions.customConditions
    },
    test: {
      include: ['src/**/__tests__/*.spec-d.mts'],
      outputFile: {
        blob: pathe.join('.vitest-reports', env.mode + '.blob.json'),
        json: pathe.join('__tests__', 'reports', env.mode + '.json'),
        junit: pathe.join('__tests__', 'reports', env.mode + '.junit.xml')
      },
      passWithNoTests: true,
      reporters: JSON.parse(process.env['VITEST_UI'] ?? '0')
        ? [new Notifier(), ['tree']]
        : env.mode === 'reports'
        ? [['tree']]
        : [
          ci ? 'github-actions' : new Notifier(),
          'blob',
          'json',
          ['junit', { suiteName: pkg.name }],
          ['tree']
        ],
      typecheck: {
        allowJs: false,
        checker: 'tsc',
        enabled: env.mode === 'typecheck',
        ignoreSourceErrors: false,
        include: ['**/__tests__/*.spec-d.mts'],
        only: true,
        tsconfig: 'tsconfig.test.json'
      }
    }
  }
}
