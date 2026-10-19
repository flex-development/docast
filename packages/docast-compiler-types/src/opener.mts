/**
 * @file Opener
 * @module docast-compiler-types/Opener
 */

import type {
  CreateNode,
  Handle,
  Node
} from '@flex-development/docast-compiler-types'
import type { TokenType } from '@flex-development/docmark-util-types'

/**
 * Create an `enter` event handler.
 *
 * @see {@linkcode CreateNode}
 * @see {@linkcode Handle}
 * @see {@linkcode Node}
 * @see {@linkcode TokenType}
 *
 * @template {Node} N
 *  The node to create and enter via handler
 * @template {TokenType} T
 *  The event token type
 *
 * @this {void}
 *
 * @param {CreateNode<N, T>} create
 *  Create the node to enter
 * @param {Handle<T> | null | undefined} [and]
 *  An additional handle to run after entering the node
 * @return {Handle<T>}
 *  The `enter` event handler
 */
type Opener = <N extends Node, T extends TokenType>(
  this: void,
  create: CreateNode<N, T>,
  and?: Handle<T> | null | undefined
) => Handle<T>

export type { Opener as default }
