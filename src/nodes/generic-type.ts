/**
 * @file Nodes - GenericType
 * @module docast/nodes/GenericType
 */

import type {
  Data,
  Identifier,
  Parent,
  TypeArgumentList
} from '@flex-development/docast'

/**
 * Info associated with generic types.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface GenericTypeData extends Data {}

/**
 * A generic type.
 *
 * @example
 *  Token<T>
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface GenericType extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Identifier}
   * @see {@linkcode TypeArgumentList}
   */
  children: [generic: Identifier, arguments: TypeArgumentList]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode GenericTypeData}
   */
  data?: GenericTypeData | undefined

  /**
   * Node type.
   */
  type: 'genericType'
}

export type { GenericType as default, GenericTypeData }
