/**
 * @file Type Tests - InlineTag
 * @module docast/nodes/tests/unit-d/InlineTag
 */

import type { Type } from '#src/enums'
import type { Position } from '#src/interfaces'
import type Node from '../node'
import type TestSubject from '../tag-inline'

describe('unit-d:nodes/InlineTag', () => {
  it('should extend Node<Data>', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<Node>()
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

  it('should match [type: Type.INLINE_TAG]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('type')
      .toEqualTypeOf<Type.INLINE_TAG>()
  })

  it('should match [value: string]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('value').toBeString()
  })
})
