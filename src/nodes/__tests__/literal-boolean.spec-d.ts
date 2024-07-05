/**
 * @file Type Tests - BooleanLiteral
 * @module docast/nodes/tests/unit-d/BooleanLiteral
 */

import type { Literal } from '@flex-development/docast'
import type TestSubject from '../literal-boolean'

describe('unit-d:nodes/BooleanLiteral', () => {
  it('should extend Literal', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<Literal>()
  })

  it('should match [type: "boolean"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'boolean'>()
  })

  it('should match [value: boolean]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('value').toEqualTypeOf<boolean>()
  })
})
