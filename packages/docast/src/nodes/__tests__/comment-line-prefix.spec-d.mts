/**
 * @file Type Tests - CommentLinePrefix
 * @module docast/nodes/tests/unit-d/CommentLinePrefix
 */

import type {
  CommentMarkers,
  CommentPadding,
  Data,
  Parent
} from '@flex-development/docast'
import type { OptionalKeys, RequiredKeys } from '@flex-development/tutils'
import { describe, expectTypeOf, it } from 'vitest'
import type * as TestSubject from '../comment-line-prefix.mts'

describe('unit-d:nodes/CommentLinePrefix', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.CommentLinePrefixData

  type Optional = OptionalKeys<Subject>
  type Required = RequiredKeys<Subject>

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toExtend<Parent>()
  })

  it('should match [children: CommentMarkers | [...CommentMarkers, CommentPadding] | [CommentPadding, ...CommentMarkers]| [CommentPadding, ...CommentMarkers, CommentPadding]]', () => {
    // Arrange
    type Expect =
      | CommentMarkers
      | [...CommentMarkers, CommentPadding]
      | [CommentPadding, ...CommentMarkers]
      | [CommentPadding, ...CommentMarkers, CommentPadding]

    // Expect
    expectTypeOf<Required>().extract<'children'>().not.toBeNever()
    expectTypeOf<Subject>().toHaveProperty('children').toEqualTypeOf<Expect>()
  })

  it('should match [data?: CommentLinePrefixData | undefined]', () => {
    expectTypeOf<Optional>().extract<'data'>().not.toBeNever()
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<SubjectData | undefined>()
  })

  it('should match [type: "commentLinePrefix"]', () => {
    expectTypeOf<Required>().extract<'type'>().not.toBeNever()
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'commentLinePrefix'>()
  })

  describe('CommentLinePrefixData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toExtend<Data>()
    })
  })
})
