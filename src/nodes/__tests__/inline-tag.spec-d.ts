/**
 * @file Type Tests - InlineTag
 * @module docast/nodes/tests/unit-d/InlineTag
 */

import type { Tag } from '#src/mixins'
import type { Optional } from '@flex-development/tutils'
import type { InlineTagData, default as TestSubject } from '../inline-tag'
import type Literal from '../literal'

describe('unit-d:nodes/InlineTag', () => {
  it('should extend Literal', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<Literal>()
  })

  it('should extend Tag', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<Tag>()
  })

  it('should match [data?: Optional<InlineTagData>]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<InlineTagData>>()
  })

  it('should match [type: "inline-tag"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'inline-tag'>()
  })
})
