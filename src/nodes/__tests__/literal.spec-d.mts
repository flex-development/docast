/**
 * @file Type Tests - Literal
 * @module docast/nodes/tests/unit-d/Literal
 */

import type TestSubject from '#nodes/literal'
import type { Node } from '@flex-development/docast'
import type { JsonPrimitive, Optional } from '@flex-development/tutils'

describe('unit-d:nodes/Literal', () => {
  it('should extend Node', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<Node>()
  })

  it('should match [value: bigint | boolean | number | string | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('value')
      .toEqualTypeOf<Optional<JsonPrimitive | bigint>>()
  })
})
