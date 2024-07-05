/**
 * @file Type Tests - Modifier
 * @module docast/nodes/tests/unit-d/Modifier
 */

import type { Literal, ModifierKeyword } from '@flex-development/docast'
import type * as TestSubject from '../modifier'

describe('unit-d:nodes/Modifier', () => {
  type Subject = TestSubject.default

  it('should extend Literal', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Literal>()
  })

  it('should match [type: "modifier"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'modifier'>()
  })

  it('should match [value: ModifierKeyword]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('value')
      .toEqualTypeOf<ModifierKeyword>()
  })
})
