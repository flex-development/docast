/**
 * @file Type Tests - NumberLiteral
 * @module docast/nodes/tests/unit-d/NumberLiteral
 */

import type { Literal } from '@flex-development/docast'
import type TestSubject from '../literal-number'

describe('unit-d:nodes/NumberLiteral', () => {
  it('should extend Literal', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<Literal>()
  })

  it('should match [type: "number"]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('type').toEqualTypeOf<'number'>()
  })

  it('should match [raw: string]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('raw').toEqualTypeOf<string>()
  })

  it('should match [value: number]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('value').toEqualTypeOf<number>()
  })
})
