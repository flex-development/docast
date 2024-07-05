/**
 * @file Type Tests - NonNullableType
 * @module docast/nodes/tests/unit-d/NonNullableType
 */

import type { Data, Parent } from '@flex-development/docast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../non-nullable-type'

describe('unit-d:nodes/NonNullableType', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.NonNullableTypeData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [data?: NonNullableTypeData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [postfix: boolean]', () => {
    expectTypeOf<Subject>().toHaveProperty('postfix').toEqualTypeOf<boolean>()
  })

  it('should match [type: "nonNullableType"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'nonNullableType'>()
  })

  describe('NonNullableTypeData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
