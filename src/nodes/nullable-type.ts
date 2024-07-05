/**
 * @file Nodes - NullableType
 * @module docast/nodes/NullableType
 */

import type { Data, Parent, TypeExpression } from '@flex-development/docast'

/**
 * Info associated with nullable types.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface NullableTypeData extends Data {}

/**
 * A nullable type.
 *
 * @example
 *  ?number
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface NullableType extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode TypeExpression}
   */
  children: [type: TypeExpression]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode NullableTypeData}
   */
  data?: NullableTypeData | undefined

  /**
   * Node type.
   */
  type: 'nullableType'
}

export type { NullableType as default, NullableTypeData }
