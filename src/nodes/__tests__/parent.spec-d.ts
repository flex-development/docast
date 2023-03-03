/**
 * @file Type Tests - Parent
 * @module docast/nodes/tests/unit-d/Parent
 */

import type { Child, ParentType } from '#src/types'
import type Node from '../node'
import type TestSubject from '../parent'

describe('unit-d:nodes/Parent', () => {
  it('should extend Node<Data>', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<Node>()
  })

  it('should match [children: ChildNode[]]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('children')
      .toEqualTypeOf<Child[]>()
  })

  it('should match [type: ParentType]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('type')
      .toEqualTypeOf<ParentType>()
  })
})
