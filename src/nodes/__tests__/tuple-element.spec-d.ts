/**
 * @file Type Tests - TupleElement
 * @module docast/nodes/tests/unit-d/TupleElement
 */

import type { Data, Parent } from '@flex-development/docast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../tuple-element'

describe('unit-d:nodes/TupleElement', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.TupleElementData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [data?: TupleElementData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [optional: boolean]', () => {
    expectTypeOf<Subject>().toHaveProperty('optional').toEqualTypeOf<boolean>()
  })

  it('should match [type: "tupleElement"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'tupleElement'>()
  })

  describe('TupleElementData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
