/**
 * @file Type Tests - PropertyAccessType
 * @module docast/nodes/tests/unit-d/PropertyAccessType
 */

import type { Data, Parent } from '@flex-development/docast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../property-access-type'

describe('unit-d:nodes/PropertyAccessType', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.PropertyAccessTypeData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [data?: PropertyAccessTypeData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "propertyAccessType"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'propertyAccessType'>()
  })

  describe('PropertyAccessTypeData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
