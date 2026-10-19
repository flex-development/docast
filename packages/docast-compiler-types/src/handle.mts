/**
 * @file Handle
 * @module docast-compiler-types/Handle
 */

import type {
  CompileContext
} from '@flex-development/docast-compiler-types'
import type { Token, TokenType } from '@flex-development/docmark-util-types'

/**
 * Handle an event token.
 *
 * @see {@linkcode CompileContext}
 * @see {@linkcode TokenType}
 * @see {@linkcode Token}
 *
 * @template {TokenType} [T]
 *  The event token type
 *
 * @this {CompileContext}
 *
 * @param {Token<T>} token
 *  The event token
 * @return {undefined | void}
 *  Nothing
 */
type Handle<T extends TokenType = TokenType> = (
  this: CompileContext,
  token: Token<T>
) => undefined | void

export type { Handle as default }
