/**
 * @file Type Tests - Comment
 * @module docast/nodes/tests/unit-d/Comment
 */

import type {
  CodeSegment,
  Data,
  Description,
  FlowContent,
  Parent
} from '@flex-development/docast'
import type { Nilable, Optional } from '@flex-development/tutils'
import type * as TestSubject from '../comment'

describe('unit-d:nodes/Comment', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.CommentData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [children: Exclude<FlowContent, Description>[] | [Description, ...Exclude<FlowContent, Description>[]]]', () => {
    // Arrange
    type Expect =
      | Exclude<FlowContent, Description>[]
      | [summary: Description, ...Exclude<FlowContent, Description>[]]

    // Expect
    expectTypeOf<Subject>().toHaveProperty('children').toEqualTypeOf<Expect>()
  })

  it('should match [code?: Nilable<CodeSegment>]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('code')
      .toEqualTypeOf<Nilable<CodeSegment>>()
  })

  it('should match [data?: Optional<CommentData>]', () => {
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
