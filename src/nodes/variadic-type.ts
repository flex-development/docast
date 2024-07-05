/**
 * @file Nodes - VariadicType
 * @module docast/nodes/VariadicType
 */

import type { Data, Parent, TypeExpression } from '@flex-development/docast'

/**
 * Info associated with variadic types.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface VariadicTypeData extends Data {}

/**
 * A variadic type (`...number`).
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface VariadicType extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode TypeExpression}
   */
  children: [type: TypeExpression]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode VariadicTypeData}
   */
  data?: VariadicTypeData | undefined

  /**
   * Node type.
   */
  type: 'variadicType'
}

export type { VariadicType as default, VariadicTypeData }
