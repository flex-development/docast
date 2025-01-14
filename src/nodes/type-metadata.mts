/**
 * @file Nodes - TypeMetadata
 * @module docast/nodes/TypeMetadata
 */

import type { Data, Parent, TypeExpression } from '@flex-development/docast'

/**
 * Info associated with type metadata.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface TypeMetadataData extends Data {}

/**
 * An inlined type expression.
 *
 * @example
 *  {number}
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface TypeMetadata extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode TypeExpression}
   */
  children: [type: TypeExpression]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode TypeMetadataData}
   */
  data?: TypeMetadataData | undefined

  /**
   * Raw type expression.
   */
  raw: string

  /**
   * Node type.
   */
  type: 'typeMetadata'
}

export type { TypeMetadata as default, TypeMetadataData }
