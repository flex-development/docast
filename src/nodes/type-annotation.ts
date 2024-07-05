/**
 * @file Nodes - TypeAnnotation
 * @module docast/nodes/TypeAnnotation
 */

import type { Data, Parent, TypeExpression } from '@flex-development/docast'

/**
 * Info associated with type annotations.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface TypeAnnotationData extends Data {}

/**
 * A type annotation.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface TypeAnnotation extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode TypeExpression}
   */
  children: [type: TypeExpression]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode TypeAnnotationData}
   */
  data?: TypeAnnotationData | undefined

  /**
   * Boolean indicating if an optional type is being annotated.
   */
  optional?: boolean | null | undefined

  /**
   * Node type.
   */
  type: 'typeAnnotation'
}

export type { TypeAnnotation as default, TypeAnnotationData }
