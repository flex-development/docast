/**
 * @file Type Tests - IntersectionType
 * @module docast/nodes/tests/unit-d/IntersectionType
 */

import type { Data, Parent } from '@flex-development/docast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../intersection-type'

describe('unit-d:nodes/IntersectionType', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.IntersectionTypeData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [data?: IntersectionTypeData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "intersectionType"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'intersectionType'>()
  })

  describe('IntersectionTypeData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
