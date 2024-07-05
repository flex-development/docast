/**
 * @file Nodes - ConstructorType
 * @module docast/nodes/ConstructorType
 */

import type { Data, Parent, TypeExpression } from '@flex-development/docast'

/**
 * Info associated with constructor types.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface ConstructorTypeData extends Data {}

/**
 * A constructor type.
 *
 * @example
 *  new () => Base
 * @example
 *  new (options: Options, ...plugins: Plugin[]) => Base
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface ConstructorType extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode TypeExpression}
   */
  children: [construct: TypeExpression]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode ConstructorTypeData}
   */
  data?: ConstructorTypeData | undefined

  /**
   * Node type.
   */
  type: 'constructorType'
}

export type { ConstructorTypeData, ConstructorType as default }
