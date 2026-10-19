/**
 * @file OnEnterError
 * @module docast-compiler-types/OnEnterError
 */

import type {
  CompileContext
} from '@flex-development/docast-compiler-types'
import type { Token, TokenType } from '@flex-development/docmark-util-types'

/**
 * Handle the case where the `right` token is open,
 * but is closed by the `left` token, or because end of content was reached.
 *
 * @see {@linkcode CompileContext}
 * @see {@linkcode TokenType}
 * @see {@linkcode Token}
 *
 * @template {TokenType} [L]
 *  The exiting token type
 * @template {TokenType} [R]
 *  The open token type
 *
 * @this {CompileContext}
 *
 * @param {Token<L> | undefined} left
 *  The exiting token
 * @param {Token<R>} right
 *  The open token
 * @return {undefined}
 */
type OnEnterError<
  L extends TokenType = TokenType,
  R extends TokenType = TokenType
> = (
  this: CompileContext,
  left: Token<L> | undefined,
  right: Token<R>
) => undefined

export type { OnEnterError as default }
