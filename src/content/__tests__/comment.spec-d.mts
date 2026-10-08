/**
 * @file Type Tests - comment
 * @module docast/content/tests/unit-d/comment
 */

import type NodeObject from '#tests/types/node-object'
import type { Summary, Tag } from '@flex-development/docast'
import { describe, expectTypeOf, it } from 'vitest'
import type * as TestSubject from '../comment.mts'

describe('unit-d:content/comment', () => {
  describe('CommentContent', () => {
    it('should equal CommentContentMap[keyof CommentContentMap]', () => {
      // Arrange
      type K = keyof TestSubject.CommentContentMap
      type Expect = TestSubject.CommentContentMap[K]

      // Expect
      expectTypeOf<TestSubject.CommentContent>().toEqualTypeOf<Expect>()
    })
  })

  describe('CommentContentMap', () => {
    it('should extend NodeObject<Summary>', () => {
      expectTypeOf<TestSubject.CommentContentMap>()
        .toExtend<NodeObject<Summary>>()
    })

    it('should extend NodeObject<Tag>', () => {
      expectTypeOf<TestSubject.CommentContentMap>()
        .toExtend<NodeObject<Tag>>()
    })
  })

  describe('FreeformCommentContent', () => {
    it('should equal Exclude<CommentContent, Summary>', () => {
      expectTypeOf<TestSubject.FreeformCommentContent>()
        .toEqualTypeOf<Exclude<TestSubject.CommentContent, Summary>>()
    })
  })
})
