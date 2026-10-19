/**
 * @file eslint
 * @module config/eslint
 * @see https://eslint.org/docs/user-guide/configuring
 */

import fldv from '@flex-development/eslint-config'
import pathe from '@flex-development/pathe'

/**
 * The eslint configuration.
 *
 * @type {import('eslint').Linter.Config[]}
 * @const config
 */
const config = [
  ...fldv.configs.node,
  {
    files: ['**/*.+(cjs|cts|js|jsx|mjs|mts|ts|tsx)'],
    languageOptions: {
      parserOptions: {
        project: pathe.resolve('tsconfig.eslint.json')
      }
    }
  },
  {
    files: [
      'packages/docast/src/content/content.mts',
      'packages/docast/src/nodes/code-segment.mts'
    ],
    rules: {
      '@typescript-eslint/no-redundant-type-constituents': 0
    }
  },
  {
    files: [
      'packages/docast-compiler-types/src/handle.mts',
      'packages/docast-compiler-types/src/transform.mts'
    ],
    rules: {
      '@typescript-eslint/no-invalid-void-type': 0
    }
  }
]

export default config
