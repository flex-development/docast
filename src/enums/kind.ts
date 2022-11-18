/**
 * @file Enums - Kind
 * @module docast/enums/Kind
 */

/**
 * Code segment syntax kinds.
 *
 * @enum {Lowercase<string>}
 */
enum Kind {
  ACCESSOR = 'accessor',
  CLASS = 'class',
  CONST = 'const',
  CONSTRUCTOR = 'constructor',
  CONST_ENUM = 'const enum',
  DEFAULT = 'default',
  ENUM = 'enum',
  ENUM_MEMBER = 'enum-member',
  FUNCTION = 'function',
  GENERATOR = 'function*',
  GET = 'get',
  INTERFACE = 'interface',
  LET = 'let',
  METHOD_DECLARATION = 'method-declaration',
  METHOD_SIGNATURE = 'method-signature',
  MODULE = 'module',
  NAMESPACE = 'namespace',
  PROPERTY_DECLARATION = 'property-declaration',
  PROPERTY_SIGNATURE = 'property-signature',
  SET = 'set',
  STATEMENT = 'statement',
  TYPE = 'type',
  UNKNOWN = '',
  VAR = 'var'
}

export default Kind
