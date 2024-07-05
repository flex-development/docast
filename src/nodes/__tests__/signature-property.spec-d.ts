/**
 * @file Type Tests - PropertySignature
 * @module docast/nodes/tests/unit-d/PropertySignature
 */

import type { Data, Parent } from '@flex-development/docast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../signature-property'

describe('unit-d:nodes/PropertySignature', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.PropertySignatureData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [data?: PropertySignatureData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "propertySignature"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'propertySignature'>()
  })

  describe('PropertySignatureData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
