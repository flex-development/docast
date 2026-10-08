/**
 * @file Type Tests - TagName
 * @module docast/nodes/tests/unit-d/TagName
 */

import type { Data, Identifier, Parent } from '@flex-development/docast'
import type { OptionalKeys, RequiredKeys } from '@flex-development/tutils'
import { describe, expectTypeOf, it } from 'vitest'
import type * as TestSubject from '../tag-name.mts'

describe('unit-d:nodes/TagName', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.TagNameData

  type Optional = OptionalKeys<Subject>
  type Required = RequiredKeys<Subject>

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toExtend<Parent>()
  })

  it('should match [children: [Identifier]]', () => {
    expectTypeOf<Required>().extract<'children'>().not.toBeNever()
    expectTypeOf<Subject>()
      .toHaveProperty('children')
      .toEqualTypeOf<[Identifier]>()
  })

  it('should match [data?: TagNameData | undefined]', () => {
    expectTypeOf<Optional>().extract<'data'>().not.toBeNever()
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<SubjectData | undefined>()
  })

  it('should match [type: "tagName"]', () => {
    expectTypeOf<Required>().extract<'type'>().not.toBeNever()
    expectTypeOf<Subject>().toHaveProperty('type').toEqualTypeOf<'tagName'>()
  })

  describe('TagNameData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toExtend<Data>()
    })
  })
})
