/**
 * @file Type Tests - InlineTag
 * @module docast/nodes/tests/unit-d/InlineTag
 */

import type {
  Data,
  InlineTagContent,
  Parent,
  TagName
} from '@flex-development/docast'
import type { OptionalKeys, RequiredKeys } from '@flex-development/tutils'
import { describe, expectTypeOf, it } from 'vitest'
import type * as TestSubject from '../inline-tag.mts'

describe('unit-d:nodes/InlineTag', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.InlineTagData

  type Optional = OptionalKeys<Subject>
  type Required = RequiredKeys<Subject>

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toExtend<Parent>()
  })

  it('should match [children: [TagName, ...InlineTagContent[]]]', () => {
    expectTypeOf<Required>().extract<'children'>().not.toBeNever()
    expectTypeOf<Subject>()
      .toHaveProperty('children')
      .toEqualTypeOf<[TagName, ...InlineTagContent[]]>()
  })

  it('should match [data?: InlineTagData | undefined]', () => {
    expectTypeOf<Optional>().extract<'data'>().not.toBeNever()
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<SubjectData | undefined>()
  })

  it('should match [name: string]', () => {
    expectTypeOf<Required>().extract<'name'>().not.toBeNever()
    expectTypeOf<Subject>().toHaveProperty('name').toEqualTypeOf<string>()
  })

  it('should match [type: "inlineTag"]', () => {
    expectTypeOf<Required>().extract<'type'>().not.toBeNever()
    expectTypeOf<Subject>().toHaveProperty('type').toEqualTypeOf<'inlineTag'>()
  })

  describe('InlineTagData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toExtend<Data>()
    })
  })
})
