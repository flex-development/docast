/**
 * @file Type Tests - MappedSignature
 * @module docast/nodes/tests/unit-d/MappedSignature
 */

import type { Data, Parent } from '@flex-development/docast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../signature-mapped'

describe('unit-d:nodes/MappedSignature', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.MappedSignatureData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [data?: MappedSignatureData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "mappedSignature"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'mappedSignature'>()
  })

  describe('MappedSignatureData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
