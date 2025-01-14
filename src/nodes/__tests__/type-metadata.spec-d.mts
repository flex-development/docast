/**
 * @file Type Tests - TypeMetadata
 * @module docast/nodes/tests/unit-d/TypeMetadata
 */

import type * as TestSubject from '#nodes/type-metadata'
import type { Data, Parent } from '@flex-development/docast'
import type { Optional } from '@flex-development/tutils'

describe('unit-d:nodes/TypeMetadata', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.TypeMetadataData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [data?: TypeMetadataData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [raw: string]', () => {
    expectTypeOf<Subject>().toHaveProperty('raw').toEqualTypeOf<string>()
  })

  it('should match [type: "typeMetadata"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'typeMetadata'>()
  })

  describe('TypeMetadataData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
