/**
 * @file Nodes - Parent
 * @module docast/nodes/Parent
 */

import type { Child, Node } from '@flex-development/docast'

/**
 * An abstract docast node containing other docast or mdast nodes.
 *
 * @see {@linkcode Node}
 *
 * @extends {Node}
 */
interface Parent extends Node {
  /**
   * The list of children.
   *
   * @see {@linkcode Child}
   */
  children: Child[]
}

export type { Parent as default }
