/**
 * @file Type Tests - NullLiteral
 * @module docast/nodes/tests/unit-d/NullLiteral
 */

import type { Literal } from '@flex-development/docast'
import type TestSubject from '../literal-null'

describe('unit-d:nodes/NullLiteral', () => {
  it('should extend Literal', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<Literal>()
  })

  it('should match [type: "null"]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('type').toEqualTypeOf<'null'>()
  })

  it('should match [value: null]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('value').toEqualTypeOf<null>()
  })
})
