/**
 * @file Nodes - ConditionalType
 * @module docast/nodes/ConditionalType
 */

import type {
  Data,
  ExtendsPredicate,
  Parent,
  TypeExpression
} from '@flex-development/docast'

/**
 * Info associated with conditional types.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface ConditionalTypeData extends Data {}

/**
 * A conditional type.
 *
 * @example
 *  T extends number ? true : false
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface ConditionalType extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode ExtendsPredicate}
   * @see {@linkcode TypeExpression}
   */
  children: [
    type: TypeExpression,
    extend: ExtendsPredicate,
    alternate: TypeExpression,
    consequent: TypeExpression
  ]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode ConditionalTypeData}
   */
  data?: ConditionalTypeData | undefined

  /**
   * Node type.
   */
  type: 'conditionalType'
}

export type { ConditionalTypeData, ConditionalType as default }
