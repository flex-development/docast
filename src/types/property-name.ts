/**
 * @file Type Aliases - PropertyName
 * @module docast/types/PropertyName
 */

import type {
  Identifier,
  NumberLiteral,
  StringLiteral
} from '@flex-development/docast'

/**
 * Union of nodes representing non-computed property names.
 *
 * @see {@linkcode Identifier}
 * @see {@linkcode NumberLiteral}
 * @see {@linkcode StringLiteral}
 */
type PropertyName = Identifier | NumberLiteral | StringLiteral

export type { PropertyName as default }
