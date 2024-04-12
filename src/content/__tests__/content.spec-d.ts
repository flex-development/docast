/**
 * @file Type Tests - content
 * @module docast/content/tests/unit-d/content
 */

import type {
  BlockTagContent,
  DescriptionContent,
  FlowContent,
  PhrasingContent
} from '@flex-development/docast'
import type TestSubject from '../content'

describe('unit-d:content/content', () => {
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
