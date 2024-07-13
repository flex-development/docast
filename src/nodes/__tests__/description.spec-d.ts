/**
 * @file Type Tests - Description
 * @module docast/nodes/tests/unit-d/Description
 */

import type {
  Data,
  Parent
} from '@flex-development/docast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../description'

describe('unit-d:nodes/Description', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.DescriptionData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [data?: DescriptionData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "description"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'description'>()
  })

  describe('DescriptionData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
