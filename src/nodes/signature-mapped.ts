/**
 * @file Nodes - MappedSignature
 * @module docast/nodes/MappedSignature
 */

import type {
  Data,
  Mapper,
  MinusToken,
  Parent,
  PlusToken,
  ReadonlyModifier,
  TypeAnnotation
} from '@flex-development/docast'

/**
 * Info associated with mapped signatures.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface MappedSignatureData extends Data {}

/**
 * An mapped signature.
 *
 * @example
 *  [Property in keyof Type]: Type[Property]
 * @example
 *  [Property in keyof Type]-?: Type[Property]
 * @example
 *  [Property in keyof Type]+?: Type[Property]
 * @example
 *  readonly [Property in keyof Type]: Type[Property]
 * @example
 *  -readonly [Property in keyof Type]: Type[Property]
 * @example
 *  +readonly [Property in keyof Type]: Type[Property]
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface MappedSignature extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Mapper}
   * @see {@linkcode ReadonlyModifier}
   * @see {@linkcode MinusToken}
   * @see {@linkcode PlusToken}
   * @see {@linkcode TypeAnnotation}
   */
  children:
    | [operation: Mapper, type: TypeAnnotation]
    | [
      readonly: ReadonlyModifier,
      operation: Mapper,
      token: MinusToken | PlusToken,
      type: TypeAnnotation
    ]
    | [readonly: ReadonlyModifier, operation: Mapper, type: TypeAnnotation]
    | [
      token: MinusToken | PlusToken,
      readonly: ReadonlyModifier,
      operation: Mapper,
      token: MinusToken | PlusToken,
      type: TypeAnnotation
    ]
    | [
      token: MinusToken | PlusToken,
      readonly: ReadonlyModifier,
      operation: Mapper,
      type: TypeAnnotation
    ]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode MappedSignatureData}
   */
  data?: MappedSignatureData | undefined

  /**
   * Node type.
   */
  type: 'mappedSignature'
}

export type { MappedSignature as default, MappedSignatureData }
