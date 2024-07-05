/**
 * @file Nodes - ExtendsPredicate
 * @module docast/nodes/ExtendsPredicate
 */

import type { Data, Parent, TypeExpression } from '@flex-development/docast'

/**
 * Info associated with `extends` predicates.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface ExtendsPredicateData extends Data {}

/**
 * An `extends` predicate.
 *
 * @example
 *  extends number
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface ExtendsPredicate extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode TypeExpression}
   */
  children: [type: TypeExpression]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode ExtendsPredicateData}
   */
  data?: ExtendsPredicateData | undefined

  /**
   * Node type.
   */
  type: 'extendsPredicate'
}

export type { ExtendsPredicate as default, ExtendsPredicateData }
