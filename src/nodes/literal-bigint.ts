/**
 * @file Nodes - BigIntLiteral
 * @module docast/nodes/BigIntLiteral
 */

import type { Literal } from '@flex-development/docast'

/**
 * A `bigint` literal.
 *
 * @example
 *  0xdn
 * @example
 *  13n
 *
 * @see {@linkcode Literal}
 *
 * @extends {Literal}
 */
interface BigIntLiteral extends Literal {
  /**
   * Node type.
   */
  type: 'bigint'

  /**
   * Raw value.
   */
  raw: string

  /**
   * Plain value.
   */
  value: bigint
}

export type { BigIntLiteral as default }
