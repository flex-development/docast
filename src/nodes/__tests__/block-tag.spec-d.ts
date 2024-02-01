/**
 * @file Type Tests - BlockTag
 * @module docast/nodes/tests/unit-d/BlockTag
 */

import type { BlockTagContent } from '#src/content'
import type { Tag } from '#src/mixins'
import type { Optional } from '@flex-development/tutils'
import type { BlockTagData, default as TestSubject } from '../block-tag'
import type Parent from '../parent'

describe('unit-d:nodes/BlockTag', () => {
  it('should extend Parent', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<Parent>()
  })

  it('should extend Tag', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<Tag>()
  })

  it('should match [children: BlockContent[]]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('children')
      .toEqualTypeOf<BlockTagContent[]>()
  })

  it('should match [data?: Optional<BlockTagData>]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<BlockTagData>>()
  })

  it('should match [type: "block-tag"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'block-tag'>()
  })
})
