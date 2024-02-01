/**
 * @file Type Tests - Content
 * @module docast/content/tests/unit-d/Content
 */

import type { BlockTagContent } from '../block-tag'
import type TestSubject from '../content'
import type { DescriptionContent } from '../description'
import type { FlowContent } from '../flow'
import type { PhrasingContent } from '../phrasing'

describe('unit-d:content/Content', () => {
  it('should allow BlockTagContent', () => {
    expectTypeOf<BlockTagContent>().toMatchTypeOf<TestSubject>
  })

  it('should allow DescriptionContent', () => {
    expectTypeOf<DescriptionContent>().toMatchTypeOf<TestSubject>
  })

  it('should allow FlowContent', () => {
    expectTypeOf<FlowContent>().toMatchTypeOf<TestSubject>
  })

  it('should allow PhrasingContent', () => {
    expectTypeOf<PhrasingContent>().toMatchTypeOf<TestSubject>
  })
})
