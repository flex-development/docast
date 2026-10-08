/**
 * @file Type Tests - inlineTag
 * @module docast/content/tests/unit-d/inlineTag
 */

import type NodeObject from '#tests/types/node-object'
import type { Identifier, PhrasingContentMap } from '@flex-development/docast'
import { describe, expectTypeOf, it } from 'vitest'
import type * as TestSubject from '../inline-tag.mts'

describe('unit-d:content/inlineTag', () => {
  describe('InlineTagContent', () => {
    it('should equal InlineTagContentMap[keyof InlineTagContentMap]', () => {
      // Arrange
      type K = keyof TestSubject.InlineTagContentMap
      type Expect = TestSubject.InlineTagContentMap[K]

      // Expect
      expectTypeOf<TestSubject.InlineTagContent>().toEqualTypeOf<Expect>()
    })
  })

  describe('InlineTagContentMap', () => {
    it('should extend PhrasingContentMap', () => {
      expectTypeOf<TestSubject.InlineTagContentMap>()
        .toExtend<PhrasingContentMap>()
    })

    it('should match [inlineTag: never]', () => {
      expectTypeOf<TestSubject.InlineTagContentMap>()
        .toHaveProperty('inlineTag')
        .toEqualTypeOf<never>()
    })

    it('should match NodeObject<Identifier>', () => {
      expectTypeOf<TestSubject.InlineTagContentMap>()
        .toExtend<NodeObject<Identifier>>()
    })
  })
})
