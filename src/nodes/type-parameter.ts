/**
 * @file Nodes - TypeParameter
 * @module docast/nodes/TypeParameter
 */

import type {
  Data,
  ExtendsPredicate,
  Identifier,
  ModifierList,
  Parent,
  TypeExpression
} from '@flex-development/docast'

/**
 * Info associated with type parameters.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface TypeParameterData extends Data {}

/**
 * A type parameter.
 *
 * @example
 *  T extends number = 0
 * @example
 *  T extends number
 * @example
 *  const T
 * @example
 *  T
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface TypeParameter extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode ExtendsPredicate}
   * @see {@linkcode Identifier}
   * @see {@linkcode ModifierList}
   * @see {@linkcode TypeExpression}
   */
  children:
    | [
      modifiers: ModifierList,
      parameter: Identifier,
      extend: ExtendsPredicate
    ]
    | [
      modifiers: ModifierList,
      parameter: Identifier,
      extend: ExtendsPredicate,
      fallback: TypeExpression
    ]
    | [
      modifiers: ModifierList,
      parameter: Identifier,
      fallback: TypeExpression
    ]
    | [
      parameter: Identifier,
      extend: ExtendsPredicate,
      fallback: TypeExpression
    ]
    | [modifiers: ModifierList, parameter: Identifier]
    | [parameter: Identifier, extend: ExtendsPredicate]
    | [parameter: Identifier, fallback: TypeExpression]
    | [parameter: Identifier]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode TypeParameterData}
   */
  data?: TypeParameterData | undefined

  /**
   * Node type.
   */
  type: 'typeParameter'
}

export type { TypeParameter as default, TypeParameterData }
