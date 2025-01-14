/**
 * @file ESLint Configuration - Root
 * @module config/eslint
 * @see https://eslint.org/docs/user-guide/configuring
 */

/**
 * Root eslint configuration object.
 *
 * @type {import('eslint').Linter.Config[]}
 */
export default [
  ...(await import('./eslint.base.config.mjs')).default,
  {
    ignores: [
      '!**/__fixtures__/**/dist/',
      '!**/__fixtures__/node_modules/',
      '!**/typings/**/dist/',
      '**/*config.*.timestamp*',
      '**/.vitest-reports/',
      '**/.yarn/',
      '**/CHANGELOG.md',
      '**/LICENSE.md',
      '**/RELEASE_NOTES.md',
      '**/__tests__/reports/',
      '**/coverage/',
      '**/dist/',
      '**/tsconfig*temp.json'
    ]
  },
  {
    files: ['src/content/content.mts'],
    rules: {
      '@typescript-eslint/no-redundant-type-constituents': 0
    }
  }
]
