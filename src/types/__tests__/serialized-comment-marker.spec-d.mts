/**
 * @file Type Tests - SerializedCommentMarker
 * @module docast/types/tests/unit-d/SerializedCommentMarker
 */

import type { CommentMarkerMap } from '@flex-development/docast'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../serialized-comment-marker.mts'

describe('unit-d:types/SerializedCommentMarker', () => {
  it('should equal CommentMarkerMap[keyof CommentMarkerMap]', () => {
    // Arrange
    type Expect = CommentMarkerMap[keyof CommentMarkerMap]

    // Expect
    expectTypeOf<TestSubject>().toEqualTypeOf<Expect>()
  })
})
