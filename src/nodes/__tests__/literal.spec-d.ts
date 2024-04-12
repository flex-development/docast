/**
 * @file Type Tests - Literal
 * @module docast/nodes/tests/unit-d/Literal
 */

import type { Node } from '@flex-development/docast'
import type TestSubject from '../literal'

describe('unit-d:nodes/Literal', () => {
  it('should extend Node', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<Node>()
  })

  it('should match [value: string]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('value').toBeString()
  })
})
