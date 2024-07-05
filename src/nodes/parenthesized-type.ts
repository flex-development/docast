/**
 * @file Nodes - ParenthesizedType
 * @module docast/nodes/ParenthesizedType
 */

import type { Data, Parent, TypeExpression } from '@flex-development/docast'

/**
 * Info associated with parenthesized types.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface ParenthesizedTypeData extends Data {}

/**
 * A type expression wrapped in parentheses.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface ParenthesizedType extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode TypeExpression}
   */
  children: [type: TypeExpression]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode ParenthesizedTypeData}
   */
  data?: ParenthesizedTypeData | undefined

  /**
   * Node type.
   */
  type: 'parenthesizedType'
}

export type { ParenthesizedType as default, ParenthesizedTypeData }
