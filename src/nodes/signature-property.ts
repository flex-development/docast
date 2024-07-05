/**
 * @file Nodes - PropertySignature
 * @module docast/nodes/PropertySignature
 */

import type {
  ComputedPropertyName,
  Data,
  ModifierList,
  Parent,
  PropertyName,
  TypeAnnotation
} from '@flex-development/docast'

/**
 * Info associated with property signatures.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface PropertySignatureData extends Data {}

/**
 * A property signature.
 *
 * @example
 *  children: Node[]
 * @example
 *  type: string
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface PropertySignature extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode ComputedPropertyName}
   * @see {@linkcode ModifierList}
   * @see {@linkcode PropertyName}
   * @see {@linkcode TypeAnnotation}
   */
  children:
    | [
      modifiers: ModifierList,
      name: ComputedPropertyName | PropertyName,
      type: TypeAnnotation
    ]
    | [
      name: ComputedPropertyName | PropertyName,
      type: TypeAnnotation
    ]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode PropertySignatureData}
   */
  data?: PropertySignatureData | undefined

  /**
   * Node type.
   */
  type: 'propertySignature'
}

export type { PropertySignature as default, PropertySignatureData }
