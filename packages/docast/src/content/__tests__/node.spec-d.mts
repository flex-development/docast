/**
 * @file Type Tests - node
 * @module docast/content/tests/unit-d/node
 */

import type { Root } from '@flex-development/docast'
import type {
  InclusiveDescendant,
  Type
} from '@flex-development/unist-util-types'
import type mdast from 'mdast'
import { describe, expectTypeOf, it } from 'vitest'
import type * as TestSubject from '../node.mts'

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
    type Test = Exclude<InclusiveDescendant<Root>, mdast.RootContent>

    it('should register all docast nodes', () => {
      // Arrange
      type Nodes = TestSubject.NodeMap[keyof TestSubject.NodeMap]

      // Expect
      expectTypeOf<Exclude<Test, Nodes>>().toEqualTypeOf<never>()
      expectTypeOf<keyof TestSubject.NodeMap>().toEqualTypeOf<Type<Test>>()
    })
  })
})
