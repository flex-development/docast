/**
 * @file Type Tests - TypeOperator
 * @module docast/types/tests/unit-d/TypeOperator
 */

import type TestSubject from '../type-operator'

describe('unit-d:types/TypeOperator', () => {
  it('should extract "keyof"', () => {
    expectTypeOf<TestSubject>().extract<'keyof'>().not.toBeNever()
  })

  it('should extract "readonly"', () => {
    expectTypeOf<TestSubject>().extract<'readonly'>().not.toBeNever()
  })

  it('should extract "typeof"', () => {
    expectTypeOf<TestSubject>().extract<'typeof'>().not.toBeNever()
  })

  it('should extract "unique"', () => {
    expectTypeOf<TestSubject>().extract<'unique'>().not.toBeNever()
  })
})
