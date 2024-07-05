/**
 * @file Nodes - MethodSignature
 * @module docast/nodes/MethodSignature
 */

import type {
  CallSignature,
  ComputedPropertyName,
  Data,
  ModifierList,
  Parent,
  PropertyName
} from '@flex-development/docast'

/**
 * Info associated with method signatures.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface MethodSignatureData extends Data {}

/**
 * A method signature.
 *
 * @example
 *  enter(type: TokenType, fields?: TokenFields | null): Token
 * @example
 *  get code(): Code
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface MethodSignature extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode CallSignature}
   * @see {@linkcode ComputedPropertyName}
   * @see {@linkcode ModifierList}
   * @see {@linkcode PropertyName}
   */
  children:
    | [
      modifiers: ModifierList,
      name: ComputedPropertyName | PropertyName,
      call: CallSignature
    ]
    | [
      name: ComputedPropertyName | PropertyName,
      call: CallSignature
    ]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode MethodSignatureData}
   */
  data?: MethodSignatureData | undefined

  /**
   * Node type.
   */
  type: 'methodSignature'
}

export type { MethodSignature as default, MethodSignatureData }
