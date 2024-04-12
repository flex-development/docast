/**
 * @file Type Tests - BlockTag
 * @module docast/nodes/tests/unit-d/BlockTag
 */

import type {
  BlockTagContent,
  Data,
  Parent,
  Tag,
  TypeExpression
} from '@flex-development/docast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../block-tag'

describe('unit-d:nodes/BlockTag', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.BlockTagData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should extend Tag', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Tag>()
  })

  it('should match [children: Exclude<BlockTagContent, TypeExpression>[] | [TypeExpression, ...Exclude<BlockTagContent, TypeExpression>[]]]', () => {
    // Arrange
    type Expect =
      | Exclude<BlockTagContent, TypeExpression>[]
      | [TypeExpression, ...Exclude<BlockTagContent, TypeExpression>[]]

    // Expect
    expectTypeOf<Subject>().toHaveProperty('children').toEqualTypeOf<Expect>()
  })

  it('should match [data?: Optional<BlockTagData>]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "blockTag"]', () => {
    expectTypeOf<Subject>().toHaveProperty('type').toEqualTypeOf<'blockTag'>()
  })

  describe('BlockTagData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
