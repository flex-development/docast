/**
 * @file Type Tests - node
 * @module docast/content/tests/unit-d/node
 */

import type { InlineTag, Root } from '@flex-development/docast'
import type {
  InclusiveDescendant,
  Type
} from '@flex-development/unist-util-types'
import type mdast from 'mdast'
import type * as TestSubject from '../node'

describe('unit-d:content/node', () => {
  describe('DocastNode', () => {
    it('should equal NodeMap[keyof NodeMap]', () => {
      // Arrange
      type K = keyof TestSubject.NodeMap
      type Expect = TestSubject.NodeMap[K]

      // Expect
      expectTypeOf<TestSubject.DocastNode>().toEqualTypeOf<Expect>()
    })
  })

  describe('NodeMap', () => {
    type Skip = InclusiveDescendant<mdast.Root>
    type Test = Exclude<InclusiveDescendant<Root>, Skip> | InlineTag

    it('should register all docast nodes', () => {
      // Arrange
      type Nodes = TestSubject.NodeMap[keyof TestSubject.NodeMap]

      // Expect
      expectTypeOf<Exclude<Test, Nodes>>().toEqualTypeOf<never>()
      expectTypeOf<keyof TestSubject.NodeMap>().toEqualTypeOf<Type<Test>>()
    })
  })
})
