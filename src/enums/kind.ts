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
  DEFAULT = 'default',
  ENUM = 'enum',
  ENUM_CONST = 'const enum',
  FUNCTION = 'function',
  GENERATOR = 'function*',
  GET = 'get',
  INTERFACE = 'interface',
  LET = 'let',
  MEMBER = 'member',
  METHOD = 'method',
  MODULE = 'module',
  NAMESPACE = 'namespace',
  PROPERTY = 'property',
  SET = 'set',
  STATEMENT = 'statement',
  TYPE = 'type',
  UNKNOWN = '',
  VAR = 'var'
}

export default Kind
