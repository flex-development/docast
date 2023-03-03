/**
 * @file Type Tests - Comment
 * @module docast/nodes/tests/unit-d/Comment
 */

import type { Type } from '#src/enums'
import type { Context, Position } from '#src/interfaces'
import type { Nullable } from '@flex-development/tutils'
import type TestSubject from '../comment'
import type ImplicitDescription from '../implicit-description'
import type Parent from '../parent'
import type BlockTag from '../tag-block'

describe('unit-d:nodes/Comment', () => {
  it('should extend Parent<BlockTag | ImplicitDescription, Data>', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<
      Parent<BlockTag | ImplicitDescription>
    >()
  })

  it('should match [context: Nullable<Context>]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('context')
      .toEqualTypeOf<Nullable<Context>>()
  })

  it('should match [position: Position]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('position')
      .toEqualTypeOf<Position>()
  })

  it('should match [type: Type.COMMENT]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('type')
      .toEqualTypeOf<Type.COMMENT>()
  })

  it('should match [value: string]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('value').toBeString()
  })
})
