/**
 * @file Type Tests - ComputedPropertyName
 * @module docast/nodes/tests/unit-d/ComputedPropertyName
 */

import type { Data, Parent } from '@flex-development/docast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../computed-property-name'

describe('unit-d:nodes/ComputedPropertyName', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.ComputedPropertyNameData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [data?: ComputedPropertyNameData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "computedPropertyName"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'computedPropertyName'>()
  })

  describe('ComputedPropertyNameData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
