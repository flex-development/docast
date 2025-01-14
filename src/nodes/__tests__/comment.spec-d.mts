/**
 * @file Type Tests - Comment
 * @module docast/nodes/tests/unit-d/Comment
 */

import type * as TestSubject from '#nodes/comment'
import type {
  CodeSegment,
  Data,
  Parent
} from '@flex-development/docast'
import type { Nilable, Optional } from '@flex-development/tutils'

describe('unit-d:nodes/Comment', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.CommentData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [code?: CodeSegment | null | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('code')
      .toEqualTypeOf<Nilable<CodeSegment>>()
  })

  it('should match [data?: CommentData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "comment"]', () => {
    expectTypeOf<Subject>().toHaveProperty('type').toEqualTypeOf<'comment'>()
  })

  describe('CommentData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
