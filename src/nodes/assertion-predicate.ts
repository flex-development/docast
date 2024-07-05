/**
 * @file Nodes - AssertionPredicate
 * @module docast/nodes/AssertionPredicate
 */

import type {
  Data,
  Identifier,
  Parent,
  This,
  TypePredicate
} from '@flex-development/docast'

/**
 * Info associated with assertion predicates.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface AssertionPredicateData extends Data {}

/**
 * An assertion predicate.
 *
 * @example
 *  asserts condition is T
 * @example
 *  asserts condition
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface AssertionPredicate extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Identifier}
   * @see {@linkcode This}
   * @see {@linkcode TypePredicate}
   */
  children: [argument: Identifier | This | TypePredicate]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode AssertionPredicateData}
   */
  data?: AssertionPredicateData | undefined

  /**
   * Node type.
   */
  type: 'assertionPredicate'
}

export type { AssertionPredicateData, AssertionPredicate as default }
