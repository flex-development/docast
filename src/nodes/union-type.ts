/**
 * @file Nodes - UnionType
 * @module docast/nodes/UnionType
 */

import type { Data, Parent, TypeExpression } from '@flex-development/docast'

/**
 * Info associated with union types.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface UnionTypeData extends Data {}

/**
 * A union type (`boolean | null | undefined`).
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface UnionType extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode TypeExpression}
   */
  children: [left: TypeExpression, right: TypeExpression]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode UnionTypeData}
   */
  data?: UnionTypeData | undefined

  /**
   * Node type.
   */
  type: 'unionType'
}

export type { UnionType as default, UnionTypeData }
