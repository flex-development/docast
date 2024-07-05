/**
 * @file Nodes - TupleType
 * @module docast/nodes/TupleType
 */

import type {
  Data,
  Parent,
  TupleElement
} from '@flex-development/docast'

/**
 * Info associated with tuple types.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface TupleTypeData extends Data {}

/**
 * A tuple type.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface TupleType extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode TupleElement}
   */
  children: TupleElement[] | []

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode TupleTypeData}
   */
  data?: TupleTypeData | undefined

  /**
   * Node type.
   */
  type: 'tupleType'
}

export type { TupleType as default, TupleTypeData }
