/**
 * @file Type Tests - PlusToken
 * @module docast/nodes/tests/unit-d/PlusToken
 */

import type { Node } from '@flex-development/docast'
import type TestSubject from '../token-plus'

describe('unit-d:nodes/PlusToken', () => {
  it('should extend Node', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<Node>()
  })

  it('should match [type: "plusToken"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'plusToken'>()
  })
})
