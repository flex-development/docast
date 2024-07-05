/**
 * @file Nodes - BooleanLiteral
 * @module docast/nodes/BooleanLiteral
 */

import type { Literal } from '@flex-development/docast'

/**
 * A boolean literal.
 *
 * @example
 *  false
 * @example
 *  true
 *
 * @see {@linkcode Literal}
 *
 * @extends {Literal}
 */
interface BooleanLiteral extends Literal {
  /**
   * Node type.
   */
  type: 'boolean'

  /**
   * Plain value.
   */
  value: boolean
}

export type { BooleanLiteral as default }
