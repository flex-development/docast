/**
 * @file Nodes - StringLiteral
 * @module docast/nodes/StringLiteral
 */

import type { Literal } from '@flex-development/docast'

/**
 * A string literal.
 *
 * @example
 *  'hello'
 * @example
 *  "world"
 *
 * @see {@linkcode Literal}
 *
 * @extends {Literal}
 */
interface StringLiteral extends Literal {
  /**
   * Node type.
   */
  type: 'string'

  /**
   * Raw value.
   */
  raw: string

  /**
   * Plain value.
   */
  value: string
}

export type { StringLiteral as default }
