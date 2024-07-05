/**
 * @file Nodes - NumberLiteral
 * @module docast/nodes/NumberLiteral
 */

import type { Literal } from '@flex-development/docast'

/**
 * An integer, float, or exponential number.
 *
 * @example
 *  0xd
 * @example
 *  13
 * @example
 *  13.0
 * @example
 *  1_3
 * @example
 *  13e1
 *
 * @see {@linkcode Literal}
 *
 * @extends {Literal}
 */
interface NumberLiteral extends Literal {
  /**
   * Node type.
   */
  type: 'number'

  /**
   * Raw value.
   */
  raw: string

  /**
   * Plain value.
   */
  value: number
}

export type { NumberLiteral as default }
