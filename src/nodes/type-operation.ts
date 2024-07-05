/**
 * @file Nodes - TypeOperation
 * @module docast/nodes/TypeOperation
 */

import type {
  Data,
  Parent,
  TypeExpression,
  TypeOperator
} from '@flex-development/docast'

/**
 * Info associated with type operations.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface TypeOperationData extends Data {}

/**
 * A type operation.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface TypeOperation extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode TypeExpression}
   */
  children: [type: TypeExpression]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode TypeOperationData}
   */
  data?: TypeOperationData | undefined

  /**
   * Type operator.
   *
   * @see {@linkcode TypeOperator}
   */
  operator: TypeOperator

  /**
   * Node type.
   */
  type: 'typeOperation'
}

export type { TypeOperation as default, TypeOperationData }
