/**
 * @file Nodes - EllipsisToken
 * @module docast/nodes/EllipsisToken
 */

import type { Node } from '@flex-development/docast'

/**
 * An ellipsis (`...`).
 *
 * @see {@linkcode Node}
 *
 * @extends {Node}
 */
interface EllipsisToken extends Node {
  /**
   * Node type.
   */
  type: 'ellipsisToken'
}

export type { EllipsisToken as default }
