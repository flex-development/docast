/**
 * @file Buffer
 * @module docast-compiler-types/Buffer
 */

import type {
  CompileContext
} from '@flex-development/docast-compiler-types'

/**
 * Start capturing output into a temporary node.
 *
 * @see {@linkcode CompileContext}
 *
 * @this {CompileContext}
 *
 * @return {undefined}
 */
type Buffer = (this: CompileContext) => undefined

export type { Buffer as default }
