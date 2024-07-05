/**
 * @file Type Tests - Modifier
 * @module docast/nodes/tests/unit-d/Modifier
 */

import type { Modifier } from '@flex-development/docast'
import type TestSubject from '../modifier-readonly'

describe('unit-d:nodes/Modifier', () => {
  it('should extend Modifier', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<Modifier>()
  })

  it('should match [value: "readonly"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('value')
      .toEqualTypeOf<'readonly'>()
  })
})
