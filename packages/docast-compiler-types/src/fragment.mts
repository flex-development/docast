/**
 * @file Fragment
 * @module docast-compiler-types/Fragment
 */

import type { Parent, PhrasingContent } from '@flex-development/docast'

/**
 * A temporary node.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface Fragment extends Parent {
  /**
   * The list of children.
   *
   * @see {@linkcode PhrasingContent}
   *
   * @override
   */
  children: PhrasingContent[]

  /**
   * The node type.
   *
   * @override
   */
  type: 'fragment'
}

export type { Fragment as default }
