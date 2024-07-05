/**
 * @file Nodes - MinusToken
 * @module docast/nodes/MinusToken
 */

import type { Node } from '@flex-development/docast'

/**
 * A minus sign (`-`).
 *
 * @see {@linkcode Node}
 *
 * @extends {Node}
 */
interface MinusToken extends Node {
  /**
   * Node type.
   */
  type: 'minusToken'
}

export type { MinusToken as default }
