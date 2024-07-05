/**
 * @file Type Tests - ModifierKeyword
 * @module docast/types/tests/unit-d/ModifierKeyword
 */

import type TestSubject from '../modifier-keyword'

describe('unit-d:types/ModifierKeyword', () => {
  it('should extract "const"', () => {
    expectTypeOf<TestSubject>().extract<'const'>().not.toBeNever()
  })

  it('should extract "get"', () => {
    expectTypeOf<TestSubject>().extract<'get'>().not.toBeNever()
  })

  it('should extract "in"', () => {
    expectTypeOf<TestSubject>().extract<'in'>().not.toBeNever()
  })

  it('should extract "out"', () => {
    expectTypeOf<TestSubject>().extract<'out'>().not.toBeNever()
  })

  it('should extract "readonly"', () => {
    expectTypeOf<TestSubject>().extract<'readonly'>().not.toBeNever()
  })

  it('should extract "set"', () => {
    expectTypeOf<TestSubject>().extract<'set'>().not.toBeNever()
  })
})
