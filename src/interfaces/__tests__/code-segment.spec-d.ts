/**
 * @file Type Tests - CodeSegment
 * @module docast/interfaces/tests/unit-d/CodeSegment
 */

import type { Position } from '@flex-development/docast'
import type { Nilable, NumberString } from '@flex-development/tutils'
import type TestSubject from '../code-segment'

describe('unit-d:interfaces/CodeSegment', () => {
  it('should match [identifier: string]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('identifier').toBeString()
  })

  it('should match [kind: NumberString]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('kind')
      .toEqualTypeOf<NumberString>()
  })

  it('should match [parent?: Nilable<CodeSegment>]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('parent')
      .toEqualTypeOf<Nilable<TestSubject>>()
  })

  it('should match [position: Position]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('position')
      .toEqualTypeOf<Position>()
  })
})
