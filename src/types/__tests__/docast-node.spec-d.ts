/**
 * @file Type Tests - DocastNode
 * @module docast/types/tests/unit-d/DocastNode
 */

import type {
  BlockTag,
  Comment,
  Description,
  InlineTag,
  TypeExpression
} from '#src/nodes'
import type TestSubject from '../docast-node'

describe('unit-d:types/DocastNode', () => {
  it('should extract BlockTag', () => {
    expectTypeOf<TestSubject>().extract<BlockTag>().not.toBeNever()
  })

  it('should extract Comment', () => {
    expectTypeOf<TestSubject>().extract<Comment>().not.toBeNever()
  })

  it('should extract Description', () => {
    expectTypeOf<TestSubject>().extract<Description>().not.toBeNever()
  })

  it('should extract InlineTag', () => {
    expectTypeOf<TestSubject>().extract<InlineTag>().not.toBeNever()
  })

  it('should extract TypeExpression', () => {
    expectTypeOf<TestSubject>().extract<TypeExpression>().not.toBeNever()
  })
})
