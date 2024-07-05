/**
 * @file Nodes - OptionalType
 * @module docast/nodes/OptionalType
 */

import type { Data, Parent, TypeExpression } from '@flex-development/docast'

/**
 * Info associated with optional types.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface OptionalTypeData extends Data {}

/**
 * An optional type.
 *
 * @example
 *  number?
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface OptionalType extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode TypeExpression}
   */
  children: [argument: TypeExpression]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode OptionalTypeData}
   */
  data?: OptionalTypeData | undefined

  /**
   * Node type.
   */
  type: 'optionalType'
}

export type { OptionalType as default, OptionalTypeData }
