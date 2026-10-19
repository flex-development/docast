/**
 * @file Enter
 * @module docast-compiler-types/Enter
 */

import type {
  CompileContext,
  Node,
  OnEnterError
} from '@flex-development/docast-compiler-types'
import type { Token } from '@flex-development/docmark-util-types'

/**
 * Enter a node.
 *
 * @see {@linkcode Node}
 * @see {@linkcode OnEnterError}
 * @see {@linkcode Token}
 *
 * @this {CompileContext}
 *
 * @param {Node} node
 *  The node to enter
 * @param {Token} token
 *  The token associated with `node`
 * @param {OnEnterError | null | undefined} [onError]
 *  Handle the case where another token is open, but closed by something else
 * @return {undefined}
 */
type Enter = (
  this: CompileContext,
  node: Node,
  token: Token,
  onError?: OnEnterError | null | undefined
) => undefined

export type { Enter as default }
