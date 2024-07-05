/**
 * @file Type Tests - IndexSignature
 * @module docast/nodes/tests/unit-d/IndexSignature
 */

import type { Data, Parent } from '@flex-development/docast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../signature-index'

describe('unit-d:nodes/IndexSignature', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.IndexSignatureData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [data?: IndexSignatureData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "indexSignature"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'indexSignature'>()
  })

  describe('IndexSignatureData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
