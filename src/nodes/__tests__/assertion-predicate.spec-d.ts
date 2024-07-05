/**
 * @file Type Tests - AssertionPredicate
 * @module docast/nodes/tests/unit-d/AssertionPredicate
 */

import type { Data, Parent } from '@flex-development/docast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../assertion-predicate'

describe('unit-d:nodes/AssertionPredicate', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.AssertionPredicateData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [data?: AssertionPredicateData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "assertionPredicate"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'assertionPredicate'>()
  })

  describe('AssertionPredicateData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
