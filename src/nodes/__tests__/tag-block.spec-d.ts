/**
 * @file Type Tests - BlockTag
 * @module docast/nodes/tests/unit-d/BlockTag
 */

import type { Type } from '#src/enums'
import type { Position } from '#src/interfaces'
import type Parent from '../parent'
import type TestSubject from '../tag-block'
import type InlineTag from '../tag-inline'

describe('unit-d:nodes/BlockTag', () => {
  it('should extend Parent<InlineTag, Data>', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<Parent<InlineTag>>()
  })

  it('should match [position: Position]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('position')
      .toEqualTypeOf<Position>()
  })

  it('should match [tag: string]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('tag').toBeString()
  })

  it('should match [text: string]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('text').toBeString()
  })

  it('should match [type: Type.BLOCK_TAG]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('type')
      .toEqualTypeOf<Type.BLOCK_TAG>()
  })

  it('should match [value: string]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('value').toBeString()
  })
})
