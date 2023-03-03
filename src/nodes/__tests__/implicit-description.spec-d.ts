/**
 * @file Type Tests - ImplicitDescription
 * @module docast/nodes/tests/unit-d/ImplicitDescription
 */

import type { Type } from '#src/enums'
import type { Position } from '#src/interfaces'
import type TestSubject from '../implicit-description'
import type Parent from '../parent'
import type InlineTag from '../tag-inline'

describe('unit-d:nodes/ImplicitDescription', () => {
  it('should extend Parent<InlineTag, Data>', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<Parent<InlineTag>>()
  })

  it('should match [position: Position]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('position')
      .toEqualTypeOf<Position>()
  })

  it('should match [type: Type.IMPLICIT_DESCRIPTION]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('type')
      .toEqualTypeOf<Type.IMPLICIT_DESCRIPTION>()
  })

  it('should match [value: string]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('value').toBeString()
  })
})
