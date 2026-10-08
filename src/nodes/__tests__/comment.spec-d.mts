/**
 * @file Type Tests - Comment
 * @module docast/nodes/tests/unit-d/Comment
 */

import type {
  Data,
  FreeformCommentContent,
  Parent,
  Summary
} from '@flex-development/docast'
import type { CommentKind } from '@flex-development/docmark-util-types'
import type {
  Nilable,
  OptionalKeys,
  RequiredKeys
} from '@flex-development/tutils'
import { describe, expectTypeOf, it } from 'vitest'
import type * as TestSubject from '../comment.mts'

describe('unit-d:nodes/Comment', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.CommentData

  type Optional = OptionalKeys<Subject>
  type Required = RequiredKeys<Subject>

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toExtend<Parent>()
  })

  it('should match [children: FreeformCommentContent[] | [Summary, ...FreeformCommentContent[]]]', () => {
    // Arrange
    type Expect =
      | FreeformCommentContent[]
      | [Summary, ...FreeformCommentContent[]]

    expectTypeOf<Required>().extract<'children'>().not.toBeNever()
    expectTypeOf<Subject>().toHaveProperty('children').toEqualTypeOf<Expect>()
  })

  it('should match [data?: CommentData | undefined]', () => {
    expectTypeOf<Optional>().extract<'data'>().not.toBeNever()
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<SubjectData | undefined>()
  })

  it('should match [kind: CommentKind]', () => {
    expectTypeOf<Required>().extract<'kind'>().not.toBeNever()
    expectTypeOf<Subject>().toHaveProperty('kind').toEqualTypeOf<CommentKind>()
  })

  it('should match [type: "comment"]', () => {
    expectTypeOf<Required>().extract<'type'>().not.toBeNever()
    expectTypeOf<Subject>().toHaveProperty('type').toEqualTypeOf<'comment'>()
  })

  describe('CommentData', () => {
    type Optional = OptionalKeys<SubjectData>

    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toExtend<Data>()
    })

    it('should match [indented?: boolean | null | undefined]', () => {
      expectTypeOf<Optional>().extract<'indented'>().not.toBeNever()
      expectTypeOf<SubjectData>()
        .toHaveProperty('indented')
        .toEqualTypeOf<Nilable<boolean>>()
    })

    it('should match [info?: boolean | null | undefined]', () => {
      expectTypeOf<Optional>().extract<'info'>().not.toBeNever()
      expectTypeOf<SubjectData>()
        .toHaveProperty('info')
        .toEqualTypeOf<Nilable<boolean>>()
    })
  })
})
