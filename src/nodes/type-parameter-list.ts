/**
 * @file Nodes - TypeParameterList
 * @module docast/nodes/TypeParameterList
 */

import type { Data, Parent, TypeParameter } from '@flex-development/docast'

/**
 * Info associated with type parameter lists.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface TypeParameterListData extends Data {}

/**
 * A type parameter list.
 *
 * @example
 *  <T>
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface TypeParameterList extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode TypeParameter}
   */
  children: TypeParameter[]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode TypeParameterListData}
   */
  data?: TypeParameterListData | undefined

  /**
   * Node type.
   */
  type: 'typeParameterList'
}

export type { TypeParameterList as default, TypeParameterListData }
