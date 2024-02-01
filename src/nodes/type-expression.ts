/**
 * @file Nodes - TypeExpression
 * @module docast/nodes/TypeExpression
 */

import type { Data } from '#src/interfaces'
import type { Optional } from '@flex-development/tutils'
import type Literal from './literal'

/**
 * Info associated with type expression nodes.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface TypeExpressionData extends Data {}

/**
 * A type definition or constraint.
 *
 * @see {@linkcode Literal}
 *
 * @extends {Literal}
 */
interface TypeExpression extends Literal {
  /**
   * Data associated with type expression.
   *
   * @see {@linkcode TypeExpressionData}
   */
  data?: Optional<TypeExpressionData>

  /**
   * Node type.
   */
  type: 'type-expression'
}

export type { TypeExpressionData, TypeExpression as default }
