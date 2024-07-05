/**
 * @file Type Tests - ConstructorType
 * @module docast/nodes/tests/unit-d/ConstructorType
 */

import type { Data, Parent } from '@flex-development/docast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../constructor-type'

describe('unit-d:nodes/ConstructorType', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.ConstructorTypeData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [data?: ConstructorTypeData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "constructorType"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'constructorType'>()
  })

  describe('ConstructorTypeData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
