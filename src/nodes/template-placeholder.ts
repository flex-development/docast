/**
 * @file Nodes - TemplatePlaceholder
 * @module docast/nodes/TemplatePlaceholder
 */

import type { Data, Parent, TypeExpression } from '@flex-development/docast'

/**
 * Info associated with template literal placeholders.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface TemplatePlaceholderData extends Data {}

/**
 * A template literal placeholder (`${expression}`).
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface TemplatePlaceholder extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode TypeExpression}
   */
  children: [expression: TypeExpression]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode TemplatePlaceholderData}
   */
  data?: TemplatePlaceholderData | undefined

  /**
   * Node type.
   */
  type: 'templatePlaceholder'
}

export type { TemplatePlaceholder as default, TemplatePlaceholderData }
