/**
 * @file Nodes - PlusToken
 * @module docast/nodes/PlusToken
 */

import type { Node } from '@flex-development/docast'

/**
 * A plus sign (`+`).
 *
 * @see {@linkcode Node}
 *
 * @extends {Node}
 */
interface PlusToken extends Node {
  /**
   * Node type.
   */
  type: 'plusToken'
}

export type { PlusToken as default }
