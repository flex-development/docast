/**
 * @file Nodes - Mapper
 * @module docast/nodes/Mapper
 */

import type {
  Data,
  Identifier,
  Parent,
  TypeExpression
} from '@flex-development/docast'

/**
 * Info associated with mapped signature keys.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface MapperData extends Data {}

/**
 * A mapped signature operation.
 *
 * @example
 *  [K in keyof T]
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface Mapper extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Identifier}
   * @see {@linkcode TypeExpression}
   */
  children: [name: Identifier, type: TypeExpression]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode MapperData}
   */
  data?: MapperData | undefined

  /**
   * Node type.
   */
  type: 'mapper'
}

export type { Mapper as default, MapperData }
