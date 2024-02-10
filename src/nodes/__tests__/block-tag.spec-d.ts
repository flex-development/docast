/**
 * @file Type Tests - BlockTag
 * @module docast/nodes/tests/unit-d/BlockTag
 */

import type { BlockTagContent } from '#src/content'
import type { Tag } from '#src/mixins'
import type { Optional } from '@flex-development/tutils'
import type { BlockTagData, default as TestSubject } from '../block-tag'
import type Parent from '../parent'
import type TypeExpression from '../type-expression'

describe('unit-d:nodes/BlockTag', () => {
  it('should extend Parent', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<Parent>()
  })

  it('should extend Tag', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<Tag>()
  })

  it('should match [children: Exclude<BlockTagContent, TypeExpression>[]]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('children')
      .extract<Exclude<BlockTagContent, TypeExpression>[]>()
      .toBeArray()
  })

  it('should match [children: [TypeExpression, ...Exclude<BlockTagContent, TypeExpression>[]]]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('children')
      .extract<[
        TypeExpression,
        ...Exclude<BlockTagContent, TypeExpression>[]
      ]>()
      .toBeArray()
  })

  it('should match [data?: Optional<BlockTagData>]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<BlockTagData>>()
  })

  it('should match [type: "blockTag"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'blockTag'>()
  })
})
