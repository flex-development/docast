/**
 * @file Type Tests - ReturnType
 * @module docast/nodes/tests/unit-d/ReturnType
 */

import type { Data, Parent } from '@flex-development/docast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../return-type'

describe('unit-d:nodes/ReturnType', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.ReturnTypeData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [arrow: boolean]', () => {
    expectTypeOf<Subject>().toHaveProperty('arrow').toEqualTypeOf<boolean>()
  })

  it('should match [data?: ReturnTypeData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "returnType"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'returnType'>()
  })

  describe('ReturnTypeData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
