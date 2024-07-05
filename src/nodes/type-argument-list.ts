/**
 * @file Nodes - TypeArgumentList
 * @module docast/nodes/TypeArgumentList
 */

import type { Data, Parent, TypeExpression } from '@flex-development/docast'

/**
 * Info associated with type argument lists.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface TypeArgumentListData extends Data {}

/**
 * A type argument list.
 *
 * @example
 *  <Tree, Check>
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface TypeArgumentList extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode TypeExpression}
   */
  children: TypeExpression[] | []

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode TypeArgumentListData}
   */
  data?: TypeArgumentListData | undefined

  /**
   * Node type.
   */
  type: 'typeArgumentList'
}

export type { TypeArgumentList as default, TypeArgumentListData }
