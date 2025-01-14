/**
 * @file Nodes - Parent
 * @module docast/nodes/Parent
 */

import type { Child, Node } from '@flex-development/docast'

/**
 * Abstract docast node that contains other docast or mdast nodes.
 *
 * @see {@linkcode Node}
 *
 * @extends {Node}
 */
interface Parent extends Node {
  /**
   * List of children.
   *
   * @see {@linkcode Child}
   */
  children: Child[]
}

export type { Parent as default }
