/**
 * @file Configuration - Build
 * @module config/build
 * @see https://github.com/flex-development/mkbuild
 */

import { defineBuildConfig, type Config } from '@flex-development/mkbuild'

/**
 * Build configuration options.
 *
 * @const {Config} config
 */
const config: Config = defineBuildConfig({
  charset: 'utf8',
  dts: 'only',
  tsconfig: 'tsconfig.build.json'
})

export default config
