/**
 * @file Type Tests - MethodSignature
 * @module docast/nodes/tests/unit-d/MethodSignature
 */

import type { Data, Parent } from '@flex-development/docast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../signature-method'

describe('unit-d:nodes/MethodSignature', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.MethodSignatureData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [data?: MethodSignatureData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "methodSignature"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'methodSignature'>()
  })

  describe('MethodSignatureData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
