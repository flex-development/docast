/**
 * @file CreateNode
 * @module docast-compiler-types/CreateNode
 */

import type { Node } from '@flex-development/docast-compiler-types'
import type { Token, TokenType } from '@flex-development/docmark-util-types'

/**
 * Create a node from a token.
 *
 * @see {@linkcode Node}
 * @see {@linkcode Token}
 *
 * @template {Node} [N]
 *  The new node
 * @template {TokenType} [T]
 *  The event token type
 *
 * @this {void}
 *
 * @param {Token<T>} token
 *  The event token
 * @return {N}
 *  The new node
 */
type CreateNode<
  N extends Node = Node,
  T extends TokenType = TokenType
> = (this: void, token: Token<T>) => N

export type { CreateNode as default }
