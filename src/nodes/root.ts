/**
 * @file Nodes - Root
 * @module docast/nodes/Root
 */

import type { Data } from '#src/interfaces'
import type { Optional } from '@flex-development/tutils'
import type Comment from './comment'
import type Parent from './parent'

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
   * Data associated with docast root.
   *
   * @see {@linkcode RootData}
   */
  data?: Optional<RootData>

  /**
   * Position of root in source document.
   */
  position?: undefined

  /**
   * Node type.
   */
  type: 'root'
}

export type { RootData, Root as default }
