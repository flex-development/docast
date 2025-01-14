/**
 * @file Type Tests - flow
 * @module docast/content/tests/unit-d/flow
 */

import type * as TestSubject from '#content/flow'
import type NodeObject from '#tests/types/node-object'
import type { BlockTag, Description } from '@flex-development/docast'

describe('unit-d:content/flow', () => {
  describe('FlowContent', () => {
    it('should equal FlowContentMap[keyof FlowContentMap]', () => {
      // Arrange
      type K = keyof TestSubject.FlowContentMap
      type Expect = TestSubject.FlowContentMap[K]

      // Expect
      expectTypeOf<TestSubject.FlowContent>().toEqualTypeOf<Expect>()
    })
  })

  describe('FlowContentMap', () => {
    it('should match NodeObject<BlockTag>', () => {
      expectTypeOf<TestSubject.FlowContentMap>()
        .toMatchTypeOf<NodeObject<BlockTag>>()
    })

    it('should match NodeObject<Description>', () => {
      expectTypeOf<TestSubject.FlowContentMap>()
        .toMatchTypeOf<NodeObject<Description>>()
    })
  })
})
