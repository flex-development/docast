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
 * An inline type expression.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface TypeMetadata extends Parent {
  /**
   * The list of children.
   *
   * @see {@linkcode TypeExpression}
   *
   * @override
   */
  children: [expression: TypeExpression]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode TypeMetadataData}
   *
   * @override
   */
  data?: TypeMetadataData | undefined

  /**
   * The raw type expression.
   */
  raw: string

  /**
   * The node type.
   *
   * @override
   */
  type: 'typeMetadata'
}

export type { TypeMetadata as default, TypeMetadataData }
