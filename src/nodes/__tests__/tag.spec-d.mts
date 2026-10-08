/**
 * @file Type Tests - Tag
 * @module docast/nodes/tests/unit-d/Tag
 */

import type {
  Data,
  Namepath,
  Parent,
  TagName,
  TypeMetadata,
  UntypedTagContent
} from '@flex-development/docast'
import type { OptionalKeys, RequiredKeys } from '@flex-development/tutils'
import { describe, expectTypeOf, it } from 'vitest'
import type * as TestSubject from '../tag.mts'

describe('unit-d:nodes/Tag', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.TagData

  type Optional = OptionalKeys<Subject>
  type Required = RequiredKeys<Subject>

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toExtend<Parent>()
  })

  it('should match [children: [TagName, ...UntypedTagContent[]] | [TagName, Namepath | TypeMetadata, ...UntypedTagContent[]] | [TagName, TypeMetadata, Namepath, ...UntypedTagContent[]]]', () => {
    // Arrange
    type Expect =
      | [TagName, ...UntypedTagContent[]]
      | [TagName, Namepath | TypeMetadata, ...UntypedTagContent[]]
      | [TagName, TypeMetadata, Namepath, ...UntypedTagContent[]]

    // Expect
    expectTypeOf<Required>().extract<'children'>().not.toBeNever()
    expectTypeOf<Subject>().toHaveProperty('children').toEqualTypeOf<Expect>()
  })

  it('should match [data?: TagData | undefined]', () => {
    expectTypeOf<Optional>().extract<'data'>().not.toBeNever()
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<SubjectData | undefined>()
  })

  it('should match [type: "tag"]', () => {
    expectTypeOf<Required>().extract<'type'>().not.toBeNever()
    expectTypeOf<Subject>().toHaveProperty('type').toEqualTypeOf<'tag'>()
  })

  describe('TagData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toExtend<Data>()
    })
  })
})
