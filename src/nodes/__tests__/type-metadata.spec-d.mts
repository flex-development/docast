/**
 * @file Type Tests - TypeMetadata
 * @module docast/nodes/tests/unit-d/TypeMetadata
 */

import type { Data, Parent, TypeExpression } from '@flex-development/docast'
import type { OptionalKeys, RequiredKeys } from '@flex-development/tutils'
import { describe, expectTypeOf, it } from 'vitest'
import type * as TestSubject from '../type-metadata.mts'

describe('unit-d:nodes/TypeMetadata', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.TypeMetadataData

  type Optional = OptionalKeys<Subject>
  type Required = RequiredKeys<Subject>

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toExtend<Parent>()
  })

  it('should match [children: [TypeExpression]]', () => {
    expectTypeOf<Required>().extract<'children'>().not.toBeNever()
    expectTypeOf<Subject>()
      .toHaveProperty('children')
      .toEqualTypeOf<[TypeExpression]>()
  })

  it('should match [data?: TypeMetadataData | undefined]', () => {
    expectTypeOf<Optional>().extract<'data'>().not.toBeNever()
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<SubjectData | undefined>()
  })

  it('should match [raw: string]', () => {
    expectTypeOf<Required>().extract<'raw'>().not.toBeNever()
    expectTypeOf<Subject>().toHaveProperty('raw').toEqualTypeOf<string>()
  })

  it('should match [type: "typeMetadata"]', () => {
    expectTypeOf<Required>().extract<'type'>().not.toBeNever()
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'typeMetadata'>()
  })

  describe('TypeMetadataData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toExtend<Data>()
    })
  })
})
