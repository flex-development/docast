/**
 * @file Nodes - FunctionType
 * @module docast/nodes/FunctionType
 */

import type {
  Data,
  ParameterList,
  Parent,
  ReturnType,
  TypeParameterList
} from '@flex-development/docast'

/**
 * Info associated with function types.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface FunctionTypeData extends Data {}

/**
 * A function type.
 *
 * @example
 *  (list: number[]) => number
 * @example
 *  function(number[]): number
 * @example
 *  function(number[])
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface FunctionType extends Parent {
  /**
   * Boolean indicating arrow function syntax.
   */
  arrow: boolean

  /**
   * List of children.
   *
   * @see {@linkcode ParameterList}
   * @see {@linkcode ReturnType}
   * @see {@linkcode TypeParameterList}
   */
  children:
    | [params: ParameterList, ret: ReturnType]
    | [params: ParameterList]
    | [typeParams: TypeParameterList, params: ParameterList, ret: ReturnType]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode FunctionTypeData}
   */
  data?: FunctionTypeData | undefined

  /**
   * Node type.
   */
  type: 'functionType'
}

export type { FunctionType as default, FunctionTypeData }
