/**
 * @file Nodes - TypeExpression
 * @module docast/nodes/TypeExpression
 */

import type { Data, Literal } from '@flex-development/docast'
import type { Optional } from '@flex-development/tutils'

/**
 * Info associated with type expressions.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface TypeExpressionData extends Data {}

/**
 * A type definition or constraint denoted in block tag **tag content**.
 *
 * @see {@linkcode Literal}
 *
 * @extends {Literal}
 */
interface TypeExpression extends Literal {
  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode TypeExpressionData}
   */
  data?: Optional<TypeExpressionData>

  /**
   * Node type.
   */
  type: 'typeExpression'
}

export type { TypeExpressionData, TypeExpression as default }
