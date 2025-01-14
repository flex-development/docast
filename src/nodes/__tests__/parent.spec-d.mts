/**
 * @file Type Tests - Parent
 * @module docast/nodes/tests/unit-d/Parent
 */

import type TestSubject from '#nodes/parent'
import type { Child, Node } from '@flex-development/docast'

describe('unit-d:nodes/Parent', () => {
  it('should extend Node', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<Node>()
  })

  it('should match [children: Child[]]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('children')
      .toEqualTypeOf<Child[]>()
  })
})
