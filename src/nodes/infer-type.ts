/**
 * @file Nodes - InferType
 * @module docast/nodes/InferType
 */

import type {
  Data,
  ExtendsPredicate,
  Identifier,
  Parent
} from '@flex-development/docast'

/**
 * Info associated with `infer` types.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface InferTypeData extends Data {}

/**
 * An `infer` type.
 *
 * @example
 *  infer N extends Node
 * @example
 *  infer N
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface InferType extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode ExtendsPredicate}
   * @see {@linkcode Identifier}
   */
  children:
    | [identifier: Identifier, extend: ExtendsPredicate]
    | [identifier: Identifier]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode InferTypeData}
   */
  data?: InferTypeData | undefined

  /**
   * Node type.
   */
  type: 'inferType'
}

export type { InferType as default, InferTypeData }
