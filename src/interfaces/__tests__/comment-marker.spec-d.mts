/**
 * @file Type Tests - CommentMarkerMap
 * @module mark/parse/interfaces/tests/unit-d/CommentMarkerMap
 */

import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../comment-marker-map.mts'

describe('unit-d:interfaces/CommentMarkerMap', () => {
  it('should register serialized comment markers', () => {
    expectTypeOf<keyof TestSubject>().toBeNever()
  })
})
