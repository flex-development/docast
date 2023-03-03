/**
 * @file Build Config
 * @module config/build
 * @see https://github.com/flex-development/mkbuild
 */

import { defineBuildConfig, type Config } from '@flex-development/mkbuild'
import pkg from './package.json' assert { type: 'json' }

/**
 * Build configuration options.
 *
 * @const {Config} config
 */
const config: Config = defineBuildConfig({
  entries: [
    { dts: 'only' },
    { dts: false, pattern: ['**/index.ts', 'enums/*'] }
  ],
  target: 'node' + pkg.engines.node.replace(/^\D+/, ''),
  tsconfig: 'tsconfig.build.json'
})

export default config
