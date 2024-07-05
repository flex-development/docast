/**
 * @file Nodes - TypeSymbol
 * @module docast/nodes/TypeSymbol
 */

import type { Literal, TypeSymbolValue } from '@flex-development/docast'

/**
 * A type symbol.
 *
 * @example
 *  *
 * @example
 *  object
 * @example
 *  void
 *
 * @see {@linkcode Literal}
 *
 * @extends {Literal}
 */
interface TypeSymbol extends Literal {
  /**
   * Node type.
   */
  type: 'typeSymbol'

  /**
   * The type symbol.
   *
   * @see {@linkcode TypeSymbolValue}
   */
  value: TypeSymbolValue
}

export type { TypeSymbol as default }
