/**
 * @file Type Tests - Child
 * @module docast/types/tests/unit-d/Child
 */

import type {
  BlockTag,
  Comment,
  ImplicitDescription,
  InlineTag
} from '#src/nodes'
import type TestSubject from '../child'

describe('unit-d:types/Child', () => {
  it('should extract BlockTag', () => {
    expectTypeOf<TestSubject>().extract<BlockTag>().not.toBeNever()
  })

  it('should extract Comment', () => {
    expectTypeOf<TestSubject>().extract<Comment>().not.toBeNever()
  })

  it('should extract ImplicitDescription', () => {
    expectTypeOf<TestSubject>().extract<ImplicitDescription>().not.toBeNever()
  })

  it('should extract InlineTag', () => {
    expectTypeOf<TestSubject>().extract<InlineTag>().not.toBeNever()
  })
})
