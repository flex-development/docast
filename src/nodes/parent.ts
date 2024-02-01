/**
 * @file Nodes - Parent
 * @module docast/nodes/Parent
 */

import type { Content } from '#src/content'
import type Comment from './comment'
import type Node from './node'

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
   * @see {@linkcode Comment}
   * @see {@linkcode Content}
   */
  children: (Comment | Content)[]
}

export type { Parent as default }
