/**
 * @file Type Tests - CodeSegment
 * @module docast/interfaces/tests/unit-d/CodeSegment
 */

import type TestSubject from '#interfaces/code-segment'
import type unist from 'unist'

describe('unit-d:interfaces/CodeSegment', () => {
  it('should match [position:unist.Position]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('position')
      .toEqualTypeOf<unist.Position>()
  })

  it('should match [type: string]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('type').toEqualTypeOf<string>()
  })
})
