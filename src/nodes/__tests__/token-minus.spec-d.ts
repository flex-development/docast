/**
 * @file Type Tests - MinusToken
 * @module docast/nodes/tests/unit-d/MinusToken
 */

import type { Node } from '@flex-development/docast'
import type TestSubject from '../token-minus'

describe('unit-d:nodes/MinusToken', () => {
  it('should extend Node', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<Node>()
  })

  it('should match [type: "minusToken"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'minusToken'>()
  })
})
