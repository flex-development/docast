/**
 * @file Type Tests - InlineTag
 * @module docast/nodes/tests/unit-d/InlineTag
 */

import type * as TestSubject from '#nodes/inline-tag'
import type { Data, Literal, Tag } from '@flex-development/docast'
import type { Optional } from '@flex-development/tutils'

describe('unit-d:nodes/InlineTag', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.InlineTagData

  it('should extend Literal', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Literal>()
  })

  it('should extend Tag', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Tag>()
  })

  it('should match [data?: InlineTagData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "inlineTag"]', () => {
    expectTypeOf<Subject>().toHaveProperty('type').toEqualTypeOf<'inlineTag'>()
  })

  it('should match [value: string]', () => {
    expectTypeOf<Subject>().toHaveProperty('value').toEqualTypeOf<string>()
  })

  describe('InlineTagData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
