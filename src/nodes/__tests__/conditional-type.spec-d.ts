/**
 * @file Type Tests - ConditionalType
 * @module docast/nodes/tests/unit-d/ConditionalType
 */

import type { Data, Parent } from '@flex-development/docast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../conditional-type'

describe('unit-d:nodes/ConditionalType', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.ConditionalTypeData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [data?: ConditionalTypeData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "conditionalType"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'conditionalType'>()
  })

  describe('ConditionalTypeData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
