/**
 * @file Type Tests - Parent
 * @module docast/nodes/tests/unit-d/Parent
 */

import type { Content } from '#src/content'
import type Comment from '../comment'
import type Node from '../node'
import type TestSubject from '../parent'

describe('unit-d:nodes/Parent', () => {
  it('should extend Node', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<Node>()
  })

  it('should match [children: (Comment | Content)[]]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('children')
      .toEqualTypeOf<(Comment | Content)[]>()
  })
})
