/**
 * @file Type Tests - root
 * @module docast/content/tests/unit-d/root
 */

import type NodeObject from '#tests/types/node-object'
import type { CodeSegment, Comment } from '@flex-development/docast'
import { describe, expectTypeOf, it } from 'vitest'
import type * as TestSubject from '../root.mts'

describe('unit-d:content/root', () => {
  describe('RootContent', () => {
    it('should equal RootContentMap[keyof RootContentMap]', () => {
      // Arrange
      type K = keyof TestSubject.RootContentMap
      type Expect = TestSubject.RootContentMap[K]

      // Expect
      expectTypeOf<TestSubject.RootContent>().toEqualTypeOf<Expect>()
    })
  })

  describe('RootContentMap', () => {
    it('should match NodeObject<CodeSegment>', () => {
      expectTypeOf<TestSubject.RootContentMap>()
        .toExtend<NodeObject<CodeSegment>>()
    })

    it('should match NodeObject<Comment>', () => {
      expectTypeOf<TestSubject.RootContentMap>()
        .toExtend<NodeObject<Comment>>()
    })
  })
})
