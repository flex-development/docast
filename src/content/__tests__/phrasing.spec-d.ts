/**
 * @file Type Tests - phrasing
 * @module docast/content/tests/unit-d/phrasing
 */

import type { NodeObject } from '#tests/types'
import type { InlineTag } from '@flex-development/docast'
import type mdast from 'mdast'
import type * as TestSubject from '../phrasing'

describe('unit-d:content/phrasing', () => {
  describe('PhrasingContent', () => {
    it('should equal PhrasingContentMap[keyof PhrasingContentMap]', () => {
      // Arrange
      type K = keyof TestSubject.PhrasingContentMap
      type Expect = TestSubject.PhrasingContentMap[K]

      // Expect
      expectTypeOf<TestSubject.PhrasingContent>().toEqualTypeOf<Expect>
    })
  })

  describe('PhrasingContentMap', () => {
    it('should extend mdast.PhrasingContentMap', () => {
      expectTypeOf<TestSubject.PhrasingContentMap>()
        .toMatchTypeOf<mdast.PhrasingContentMap>()
    })

    it('should match NodeObject<InlineTag>', () => {
      expectTypeOf<TestSubject.PhrasingContentMap>()
        .toMatchTypeOf<NodeObject<InlineTag>>()
    })
  })
})
