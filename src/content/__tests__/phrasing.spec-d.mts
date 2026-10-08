/**
 * @file Type Tests - phrasing
 * @module docast/content/tests/unit-d/phrasing
 */

import type NodeObject from '#tests/types/node-object'
import type { InlineTag } from '@flex-development/docast'
import type mdast from 'mdast'
import { describe, expectTypeOf, it } from 'vitest'
import type * as TestSubject from '../phrasing.mts'

describe('unit-d:content/phrasing', () => {
  describe('PhrasingContent', () => {
    it('should equal PhrasingContentMap[keyof PhrasingContentMap]', () => {
      // Arrange
      type K = keyof TestSubject.PhrasingContentMap
      type Expect = TestSubject.PhrasingContentMap[K]

      // Expect
      expectTypeOf<TestSubject.PhrasingContent>().toEqualTypeOf<Expect>()
    })
  })

  describe('PhrasingContentMap', () => {
    it('should extend mdast.PhrasingContentMap', () => {
      expectTypeOf<TestSubject.PhrasingContentMap>()
        .toExtend<mdast.PhrasingContentMap>()
    })

    it('should match NodeObject<InlineTag>', () => {
      expectTypeOf<TestSubject.PhrasingContentMap>()
        .toExtend<NodeObject<InlineTag>>()
    })
  })
})
