/**
 * @file Nodes - ParameterList
 * @module docast/nodes/ParameterList
 */

import type { Data, Parameter, Parent } from '@flex-development/docast'

/**
 * Info associated with parameter lists.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface ParameterListData extends Data {}

/**
 * A parameter list.
 *
 * @example
 *  (acc: number[], num: number)
 * @example
 *  (a, b)
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface ParameterList extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Parameter}
   */
  children: Parameter[]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode ParameterListData}
   */
  data?: ParameterListData | undefined

  /**
   * Node type.
   */
  type: 'parameterList'
}

export type { ParameterList as default, ParameterListData }
