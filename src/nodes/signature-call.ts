/**
 * @file Nodes - CallSignature
 * @module docast/nodes/CallSignature
 */

import type {
  Data,
  ParameterList,
  Parent,
  ReturnType,
  TypeParameterList
} from '@flex-development/docast'

/**
 * Info associated with call signatures.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface CallSignatureData extends Data {}

/**
 * A call signature.
 *
 * @example
 *  <T>(item: T): T
 * @example
 *  (arr: number[]): number
 * @example
 *  (str: string)
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface CallSignature extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode ParameterList}
   * @see {@linkcode ReturnType}
   * @see {@linkcode TypeParameterList}
   */
  children:
    | [params: ParameterList, returnType: ReturnType]
    | [params: ParameterList]
    | [typeParams: TypeParameterList, params: ParameterList, ret: ReturnType]
    | [typeParams: TypeParameterList, params: ParameterList]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode CallSignatureData}
   */
  data?: CallSignatureData | undefined

  /**
   * Node type.
   */
  type: 'callSignature'
}

export type { CallSignatureData, CallSignature as default }
