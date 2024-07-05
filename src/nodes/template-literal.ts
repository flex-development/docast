/**
 * @file Nodes - TemplateLiteral
 * @module docast/nodes/TemplateLiteral
 */

import type {
  Data,
  Parent,
  TemplateElement,
  TemplatePlaceholder
} from '@flex-development/docast'

/**
 * Info associated with template literals.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface TemplateLiteralData extends Data {}

/**
 * A template literal.
 *
 * @see {@linkcode Parent}
 * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Template_literals
 *
 * @extends {Parent}
 */
interface TemplateLiteral extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode TemplateElement}
   * @see {@linkcode TemplatePlaceholder}
   */
  children: (TemplateElement | TemplatePlaceholder)[]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode TemplateLiteralData}
   */
  data?: TemplateLiteralData | undefined

  /**
   * Node type.
   */
  type: 'templateLiteral'
}

export type { TemplateLiteral as default, TemplateLiteralData }
