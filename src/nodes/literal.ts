/**
 * @file Nodes - Literal
 * @module docast/nodes/Literal
 */

import type Node from './node'

/**
 * Abstract docast node containing the smallest possible value.
 *
 * @see {@linkcode Node}
 *
 * @extends {Node}
 */
interface Literal extends Node {
  /**
   * Plain-text value.
   */
  value: string
}

export type { Literal as default }
