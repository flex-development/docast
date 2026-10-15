/**
 * @file Type Tests - CommentMarkers
 * @module docast/types/tests/unit-d/CommentMarkers
 */

import type { CommentMarker } from '@flex-development/docast'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../comment-markers.mts'

describe('unit-d:types/CommentMarkers', () => {
  it('should match [0: CommentMarker]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('0')
      .toEqualTypeOf<CommentMarker>()
  })

  it('should match [length: number]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('length').toEqualTypeOf<number>()
  })

  it('should not match [1: CommentMarker]', () => {
    expectTypeOf<TestSubject>().not.toHaveProperty('1')
  })
})
