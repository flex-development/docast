/**
 * @file Type Tests - ParenthesizedType
 * @module docast/nodes/tests/unit-d/ParenthesizedType
 */

import type { Data, Parent } from '@flex-development/docast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../parenthesized-type'

describe('unit-d:nodes/ParenthesizedType', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.ParenthesizedTypeData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [data?: ParenthesizedTypeData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "parenthesizedType"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'parenthesizedType'>()
  })

  describe('ParenthesizedTypeData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
