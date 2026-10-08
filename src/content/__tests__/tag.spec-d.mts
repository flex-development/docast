/**
 * @file Type Tests - tag
 * @module docast/content/tests/unit-d/tag
 */

import type NodeObject from '#tests/types/node-object'
import type { PhrasingContentMap, TypeMetadata } from '@flex-development/docast'
import type mdast from 'mdast'
import { describe, expectTypeOf, it } from 'vitest'
import type * as TestSubject from '../tag.mts'

describe('unit-d:content/tag', () => {
  describe('TagContent', () => {
    it('should equal TagContentMap[keyof TagContentMap]', () => {
      // Arrange
      type K = keyof TestSubject.TagContentMap
      type Expect = TestSubject.TagContentMap[K]

      // Expect
      expectTypeOf<TestSubject.TagContent>().toEqualTypeOf<Expect>()
    })
  })

  describe('TagContentMap', () => {
    it('should extend PhrasingContentMap', () => {
      expectTypeOf<TestSubject.TagContentMap>()
        .toExtend<PhrasingContentMap>()
    })

    it('should extend mdast.RootContentMap', () => {
      expectTypeOf<TestSubject.TagContentMap>()
        .toExtend<mdast.RootContentMap>()
    })

    it('should match NodeObject<TypeMetadata>', () => {
      expectTypeOf<TestSubject.TagContentMap>()
        .toExtend<NodeObject<TypeMetadata>>()
    })
  })
})
