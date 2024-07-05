/**
 * @file Nodes - ComputedPropertyName
 * @module docast/nodes/ComputedPropertyName
 */

import type {
  Data,
  Parent,
  PropertyName,
  TemplateLiteral
} from '@flex-development/docast'

/**
 * Info associated with computed property names.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface ComputedPropertyNameData extends Data {}

/**
 * A computed property name.
 *
 * @example
 *  [key]
 * @example
 *  ['name']
 * @example
 *  [`${id}`]
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface ComputedPropertyName extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode PropertyName}
   * @see {@linkcode TemplateLiteral}
   */
  children: [name: PropertyName | TemplateLiteral]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode ComputedPropertyNameData}
   */
  data?: ComputedPropertyNameData | undefined

  /**
   * Node type.
   */
  type: 'computedPropertyName'
}

export type { ComputedPropertyNameData, ComputedPropertyName as default }
