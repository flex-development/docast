/**
 * @file Type Tests - content
 * @module docast/content/tests/unit-d/content
 */

import type {
  CommentContent,
  InlineTagContent,
  PhrasingContent,
  RootContent,
  SummaryContent,
  TagContent,
  TypeExpression
} from '@flex-development/docast'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../content.mts'

describe('unit-d:content/content', () => {
  it('should allow CommentContent', () => {
    expectTypeOf<TestSubject>().extract<CommentContent>()
  })

  it('should allow InlineTagContent', () => {
    expectTypeOf<TestSubject>().extract<InlineTagContent>()
  })

  it('should allow PhrasingContent', () => {
    expectTypeOf<TestSubject>().extract<PhrasingContent>()
  })

  it('should allow RootContent', () => {
    expectTypeOf<TestSubject>().extract<RootContent>()
  })

  it('should allow SummaryContent', () => {
    expectTypeOf<TestSubject>().extract<SummaryContent>()
  })

  it('should allow TagContent', () => {
    expectTypeOf<TestSubject>().extract<TagContent>()
  })

  it('should allow TypeExpression', () => {
    expectTypeOf<TestSubject>().extract<TypeExpression>()
  })
})
