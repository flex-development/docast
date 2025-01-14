/**
 * @file Type Tests - blockTag
 * @module docast/content/tests/unit-d/blockTag
 */

import type * as TestSubject from '#content/block-tag'
import type NodeObject from '#tests/types/node-object'
import type {
  PhrasingContentMap,
  TypeMetadata
} from '@flex-development/docast'
import type mdast from 'mdast'

describe('unit-d:content/blockTag', () => {
  describe('BlockTagContent', () => {
    it('should equal BlockTagContentMap[keyof BlockTagContentMap]', () => {
      // Arrange
      type K = keyof TestSubject.BlockTagContentMap
      type Expect = TestSubject.BlockTagContentMap[K]

      // Expect
      expectTypeOf<TestSubject.BlockTagContent>().toEqualTypeOf<Expect>()
    })
  })

  describe('BlockTagContentMap', () => {
    it('should extend PhrasingContentMap', () => {
      expectTypeOf<TestSubject.BlockTagContentMap>()
        .toMatchTypeOf<PhrasingContentMap>()
    })

    it('should match NodeObject<mdast.Code>', () => {
      expectTypeOf<TestSubject.BlockTagContentMap>()
        .toMatchTypeOf<NodeObject<mdast.Code>>()
    })

    it('should match NodeObject<TypeMetadata>', () => {
      expectTypeOf<TestSubject.BlockTagContentMap>()
        .toMatchTypeOf<NodeObject<TypeMetadata>>()
    })
  })
})
