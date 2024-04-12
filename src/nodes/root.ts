/**
 * @file Nodes - Root
 * @module docast/nodes/Root
 */

import type { Comment, Data, Parent } from '@flex-development/docast'
import type { Optional } from '@flex-development/tutils'

/**
 * Info associated with documents.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface RootData extends Data {}

/**
 * A document fragment or whole document.
 *
 * Should be used as the root of a tree; must not be used as a child.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface Root extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Comment}
   */
  children: Comment[]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode RootData}
   */
  data?: Optional<RootData>

  /**
   * Node type.
   */
  type: 'root'
}

export type { RootData, Root as default }
