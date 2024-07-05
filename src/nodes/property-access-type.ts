/**
 * @file Nodes - PropertyAccessType
 * @module docast/nodes/PropertyAccessType
 */

import type {
  ComputedType,
  Data,
  Parent,
  TypeExpression
} from '@flex-development/docast'

/**
 * Info associated with property access types.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface PropertyAccessTypeData extends Data {}

/**
 * A property access type (`a.b`, `arr[0]`).
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface PropertyAccessType extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode ComputedType}
   * @see {@linkcode TypeExpression}
   */
  children: [object: TypeExpression, property: ComputedType | TypeExpression]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode PropertyAccessTypeData}
   */
  data?: PropertyAccessTypeData | undefined

  /**
   * Node type.
   */
  type: 'propertyAccessType'
}

export type { PropertyAccessType as default, PropertyAccessTypeData }
