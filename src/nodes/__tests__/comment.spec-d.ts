/**
 * @file Type Tests - Comment
 * @module docast/nodes/tests/unit-d/Comment
 */

import type { FlowContent } from '#src/content'
import type { CodeSegment } from '#src/interfaces'
import type { Nilable, Optional } from '@flex-development/tutils'
import type { CommentData, default as TestSubject } from '../comment'
import type Parent from '../parent'

describe('unit-d:nodes/Comment', () => {
  it('should extend Parent', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<Parent>()
  })

  it('should match [children: FlowContent[]]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('children')
      .toEqualTypeOf<FlowContent[]>()
  })

  it('should match [code?: Nilable<CodeSegment>]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('code')
      .toEqualTypeOf<Nilable<CodeSegment>>()
  })

  it('should match [data?: Optional<CommentData>]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<CommentData>>()
  })

  it('should match [type: "comment"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'comment'>()
  })
})
