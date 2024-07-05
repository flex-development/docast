/**
 * @file Nodes - IntersectionType
 * @module docast/nodes/IntersectionType
 */

import type { Data, Parent, TypeExpression } from '@flex-development/docast'

/**
 * Info associated with intersection types.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface IntersectionTypeData extends Data {}

/**
 * An intersection type.
 *
 * @example
 *  Payload & { id: string }
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface IntersectionType extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode TypeExpression}
   */
  children: [left: TypeExpression, right: TypeExpression]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode IntersectionTypeData}
   */
  data?: IntersectionTypeData | undefined

  /**
   * Node type.
   */
  type: 'intersectionType'
}

export type { IntersectionType as default, IntersectionTypeData }
