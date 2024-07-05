/**
 * @file Nodes - ComputedType
 * @module docast/nodes/ComputedType
 */

import type { Data, Parent, TypeExpression } from '@flex-development/docast'

/**
 * Info associated with computed types.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface ComputedTypeData extends Data {}

/**
 * A type expression wrapped in brackets.
 *
 * @example
 *  [K]
 * @example
 *  ['key']
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface ComputedType extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode TypeExpression}
   */
  children: [type: TypeExpression]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode ComputedTypeData}
   */
  data?: ComputedTypeData | undefined

  /**
   * Node type.
   */
  type: 'computedType'
}

export type { ComputedTypeData, ComputedType as default }
