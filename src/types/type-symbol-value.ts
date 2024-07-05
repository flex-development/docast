/**
 * @file Type Aliases - TypeSymbolValue
 * @module docast/types/TypeSymbolValue
 */

/**
 * Union of type symbols.
 */
type TypeSymbolValue =
  | '*'
  | 'any'
  | 'bigint'
  | 'boolean'
  | 'never'
  | 'number'
  | 'object'
  | 'string'
  | 'symbol'
  | 'unknown'
  | 'void'

export type { TypeSymbolValue as default }
