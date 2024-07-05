/**
 * @file Nodes - NonNullableType
 * @module docast/nodes/NonNullableType
 */

import type { Data, Parent, TypeExpression } from '@flex-development/docast'

/**
 * Info associated with non-nullable types.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface NonNullableTypeData extends Data {}

/**
 * A non-nullable type.
 *
 * @example
 *  !number
 * @example
 *  number!
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface NonNullableType extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode TypeExpression}
   */
  children: [argument: TypeExpression]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode NonNullableTypeData}
   */
  data?: NonNullableTypeData | undefined

  /**
   * Boolean indicating if operator should follow the argument.
   *
   * If `false`, the operator should precede the argument.
   */
  postfix: boolean

  /**
   * Node type.
   */
  type: 'nonNullableType'
}

export type { NonNullableType as default, NonNullableTypeData }
