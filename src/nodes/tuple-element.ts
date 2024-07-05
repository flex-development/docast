/**
 * @file Nodes - TupleElement
 * @module docast/nodes/TupleElement
 */

import type {
  Data,
  EllipsisToken,
  Identifier,
  Parent,
  TypeAnnotation,
  TypeExpression
} from '@flex-development/docast'

/**
 * Info associated with tuple elements.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface TupleElementData extends Data {}

/**
 * A tuple element.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface TupleElement extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode EllipsisToken}
   * @see {@linkcode Identifier}
   * @see {@linkcode TypeAnnotation}
   * @see {@linkcode TypeExpression}
   */
  children:
    | [ellipsis: EllipsisToken, label: Identifier, type: TypeAnnotation]
    | [label: Identifier, type: TypeAnnotation]
    | [type: TypeExpression]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode TupleElementData}
   */
  data?: TupleElementData | undefined

  /**
   * Boolean indicating optional tuple element.
   */
  optional: boolean

  /**
   * Node type.
   */
  type: 'tupleElement'
}

export type { TupleElement as default, TupleElementData }
