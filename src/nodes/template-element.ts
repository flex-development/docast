/**
 * @file Nodes - TemplateElement
 * @module docast/nodes/TemplateElement
 */

import type { Data, Literal } from '@flex-development/docast'

/**
 * Info associated with template literal elements.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface TemplateElementData extends Data {}

/**
 * A template literal element.
 *
 * @see {@linkcode Literal}
 *
 * @extends {Literal}
 */
interface TemplateElement extends Literal {
  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode TemplateElementData}
   */
  data?: TemplateElementData | undefined

  /**
   * Node type.
   */
  type: 'templateElement'

  /**
   * Raw template element value.
   */
  value: string
}

export type { TemplateElement as default, TemplateElementData }
