/**
 * @file Type Tests - ExtendsPredicate
 * @module docast/nodes/tests/unit-d/ExtendsPredicate
 */

import type { Data, Parent } from '@flex-development/docast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../extends-predicate'

describe('unit-d:nodes/ExtendsPredicate', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.ExtendsPredicateData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [data?: ExtendsPredicateData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "extendsPredicate"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'extendsPredicate'>()
  })

  describe('ExtendsPredicateData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
