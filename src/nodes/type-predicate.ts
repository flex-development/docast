/**
 * @file Nodes - TypePredicate
 * @module docast/nodes/TypePredicate
 */

import type {
  Data,
  Identifier,
  Parent,
  This,
  TypeExpression
} from '@flex-development/docast'

/**
 * Info associated with type predicates.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface TypePredicateData extends Data {}

/**
 * A type predicate.
 *
 * @example
 *  value is Type
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface TypePredicate extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Identifier}
   * @see {@linkcode This}
   * @see {@linkcode TypeExpression}
   */
  children: [value: Identifier | This, type: TypeExpression]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode TypePredicateData}
   */
  data?: TypePredicateData | undefined

  /**
   * Node type.
   */
  type: 'typePredicate'
}

export type { TypePredicate as default, TypePredicateData }
