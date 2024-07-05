/**
 * @file Nodes - ReturnType
 * @module docast/nodes/ReturnType
 */

import type {
  Data,
  Parent,
  TypeExpression
} from '@flex-development/docast'

/**
 * Info associated with return types.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface ReturnTypeData extends Data {}

/**
 * A return type.
 *
 * @example
 *  => number
 * @example
 *  : number
 * @example
 *  function(number[])
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface ReturnType extends Parent {
  /**
   * Boolean indicating arrow syntax.
   */
  arrow: boolean

  /**
   * List of children.
   *
   * @see {@linkcode TypeExpression}
   */
  children: [type: TypeExpression]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode ReturnTypeData}
   */
  data?: ReturnTypeData | undefined

  /**
   * Node type.
   */
  type: 'returnType'
}

export type { ReturnType as default, ReturnTypeData }
