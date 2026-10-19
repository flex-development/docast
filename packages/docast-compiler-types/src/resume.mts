/**
 * @file Resume
 * @module docast-compiler-types/Resume
 */

import type {
  CompileContext
} from '@flex-development/docast-compiler-types'

/**
 * Stop capturing output and serialize the captured node.
 *
 * @see {@linkcode CompileContext}
 *
 * @this {CompileContext}
 *
 * @return {string}
 *  The serialized node
 */
type Resume = (this: CompileContext) => string

export type { Resume as default }
