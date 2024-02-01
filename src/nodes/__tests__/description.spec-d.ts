/**
 * @file Type Tests - Description
 * @module docast/nodes/tests/unit-d/Description
 */

import type { DescriptionContent } from '#src/content'
import type { Optional } from '@flex-development/tutils'
import type { DescriptionData, default as TestSubject } from '../description'
import type Parent from '../parent'

describe('unit-d:nodes/Description', () => {
  it('should extend Parent', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<Parent>()
  })

  it('should match [children: DescriptionContent[]]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('children')
      .toEqualTypeOf<DescriptionContent[]>()
  })

  it('should match [data?: Optional<DescriptionData>]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<DescriptionData>>()
  })

  it('should match [type: "description"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'description'>()
  })
})
