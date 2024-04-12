/**
 * @file Type Tests - node
 * @module docast/content/tests/unit-d/node
 */

import type { NodeObject } from '#tests/types'
import type {
  BlockTag,
  Comment,
  Description,
  InlineTag,
  Root,
  TypeExpression
} from '@flex-development/docast'
import type * as TestSubject from '../node'

describe('unit-d:content/node', () => {
  describe('DocastNode', () => {
    it('should equal NodeMap[keyof NodeMap]', () => {
      // Arrange
      type K = keyof TestSubject.NodeMap
      type Expect = TestSubject.NodeMap[K]

      // Expect
      expectTypeOf<TestSubject.DocastNode>().toEqualTypeOf<Expect>
    })
  })

  describe('NodeMap', () => {
    it('should match NodeObject<BlockTag>', () => {
      expectTypeOf<TestSubject.NodeMap>().toMatchTypeOf<NodeObject<BlockTag>>()
    })

    it('should match NodeObject<Comment>', () => {
      expectTypeOf<TestSubject.NodeMap>().toMatchTypeOf<NodeObject<Comment>>()
    })

    it('should match NodeObject<Description>', () => {
      expectTypeOf<TestSubject.NodeMap>()
        .toMatchTypeOf<NodeObject<Description>>()
    })

    it('should match NodeObject<InlineTag>', () => {
      expectTypeOf<TestSubject.NodeMap>().toMatchTypeOf<NodeObject<InlineTag>>()
    })

    it('should match NodeObject<Root>', () => {
      expectTypeOf<TestSubject.NodeMap>().toMatchTypeOf<NodeObject<Root>>()
    })

    it('should match NodeObject<TypeExpression>', () => {
      expectTypeOf<TestSubject.NodeMap>()
        .toMatchTypeOf<NodeObject<TypeExpression>>()
    })
  })
})
