/**
 * @file Type Tests - Context
 * @module docast/interfaces/tests/unit-d/Context
 */

import type { Kind } from '#src/enums'
import type { LiteralUnion, Nullable } from '@flex-development/tutils'
import type TestSubject from '../context'
import type Position from '../position'

describe('unit-d:interfaces/Context', () => {
  it('should match [identifier: string]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('identifier').toBeString()
  })

  it('should match [kind: LiteralUnion<Kind, "string">]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('kind')
      .toEqualTypeOf<LiteralUnion<Kind, 'string'>>()
  })

  it('should match [parent: Nullable<string>]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('parent')
      .toEqualTypeOf<Nullable<string>>()
  })

  it('should match [position: Position]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('position')
      .toEqualTypeOf<Position>()
  })
})
