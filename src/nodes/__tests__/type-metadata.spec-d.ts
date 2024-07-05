/**
 * @file Type Tests - TypeMetadata
 * @module docast/nodes/tests/unit-d/TypeMetadata
 */

import type { Data, Parent } from '@flex-development/docast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../type-metadata'

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
