/**
 * @file Type Tests - BlockTag
 * @module docast/nodes/tests/unit-d/BlockTag
 */

import type * as TestSubject from '#nodes/block-tag'
import type {
  Data,
  Parent,
  Tag
} from '@flex-development/docast'
import type { Optional } from '@flex-development/tutils'

describe('unit-d:nodes/BlockTag', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.BlockTagData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should extend Tag', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Tag>()
  })

  it('should match [data?: BlockTagData | undefined]', () => {
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
