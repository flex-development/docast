/**
 * @file Type Tests - Kind
 * @module docast/enums/tests/unit-d/Kind
 */

import type { EmptyString } from '@flex-development/tutils'
import type TestSubject from '../kind'

describe('unit-d:enums/Kind', () => {
  it('should match [ACCESSOR = "accessor"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ACCESSOR')
      .extract<'accessor'>()
      .toBeString()
  })

  it('should match [CLASS = "class"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('CLASS')
      .extract<'class'>()
      .toBeString()
  })

  it('should match [CONST = "const"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('CONST')
      .extract<'const'>()
      .toBeString()
  })

  it('should match [CONSTRUCTOR = "constructor"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('CONSTRUCTOR')
      .extract<'constructor'>()
      .toBeString()
  })

  it('should match [DEFAULT = "default"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('DEFAULT')
      .extract<'default'>()
      .toBeString()
  })

  it('should match [ENUM = "enum"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ENUM')
      .extract<'enum'>()
      .toBeString()
  })

  it('should match [ENUM_CONST = "const enum"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ENUM_CONST')
      .extract<'const enum'>()
      .toBeString()
  })

  it('should match [FUNCTION = "function"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('FUNCTION')
      .extract<'function'>()
      .toBeString()
  })

  it('should match [GENERATOR = "function*"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('GENERATOR')
      .extract<'function*'>()
      .toBeString()
  })

  it('should match [GET = "get"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('GET')
      .extract<'get'>()
      .toBeString()
  })

  it('should match [INTERFACE = "interface"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('INTERFACE')
      .extract<'interface'>()
      .toBeString()
  })

  it('should match [LET = "let"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('LET')
      .extract<'let'>()
      .toBeString()
  })

  it('should match [MEMBER = "member"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('MEMBER')
      .extract<'member'>()
      .toBeString()
  })

  it('should match [METHOD = "method"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('METHOD')
      .extract<'method'>()
      .toBeString()
  })

  it('should match [MODULE = "module"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('MODULE')
      .extract<'module'>()
      .toBeString()
  })

  it('should match [NAMESPACE = "namespace"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('NAMESPACE')
      .extract<'namespace'>()
      .toBeString()
  })

  it('should match [PROPERTY = "property"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('PROPERTY')
      .extract<'property'>()
      .toBeString()
  })

  it('should match [SET = "set"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('SET')
      .extract<'set'>()
      .toBeString()
  })

  it('should match [STATEMENT = "statement"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('STATEMENT')
      .extract<'statement'>()
      .toBeString()
  })

  it('should match [TYPE = "type"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('TYPE')
      .extract<'type'>()
      .toBeString()
  })

  it('should match [UNKNOWN = ""]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('UNKNOWN')
      .toMatchTypeOf<EmptyString>()
  })

  it('should match [VAR = "var"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('VAR')
      .extract<'var'>()
      .toBeString()
  })
})
