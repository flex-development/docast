/**
 * @file Nodes - Parameter
 * @module docast/nodes/Parameter
 */

import type {
  Data,
  Identifier,
  Parent,
  Super,
  This,
  TypeAnnotation,
  TypeSymbol
} from '@flex-development/docast'

/**
 * Info associated with parameters.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface ParameterData extends Data {}

/**
 * A function parameter.
 *
 * @example
 *  this: void
 * @example
 *  str
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface Parameter extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Identifier}
   * @see {@linkcode Super}
   * @see {@linkcode This}
   * @see {@linkcode TypeAnnotation}
   * @see {@linkcode TypeSymbol}
   */
  children:
    | [parameter: Identifier | Super | This, type: TypeAnnotation]
    | [parameter: Identifier | Super | This | TypeSymbol]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode ParameterData}
   */
  data?: ParameterData | undefined

  /**
   * Node type.
   */
  type: 'parameter'
}

export type { Parameter as default, ParameterData }
