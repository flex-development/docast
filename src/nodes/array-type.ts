/**
 * @file Nodes - ArrayType
 * @module docast/nodes/ArrayType
 */

import type {
  Data,
  Parent,
  TypeExpression
} from '@flex-development/docast'

/**
 * Info associated with array types.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface ArrayTypeData extends Data {}

/**
 * An array type.
 *
 * @example
 *  number[]
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface ArrayType extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode TypeExpression}
   */
  children: [type: TypeExpression]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode ArrayTypeData}
   */
  data?: ArrayTypeData | undefined

  /**
   * Node type.
   */
  type: 'arrayType'
}

export type { ArrayTypeData, ArrayType as default }
