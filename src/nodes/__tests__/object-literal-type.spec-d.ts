/**
 * @file Type Tests - ObjectLiteralType
 * @module docast/nodes/tests/unit-d/ObjectLiteralType
 */

import type { Data, Parent } from '@flex-development/docast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../object-literal-type'

describe('unit-d:nodes/ObjectLiteralType', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.ObjectLiteralTypeData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [data?: ObjectLiteralTypeData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "objectLiteralType"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'objectLiteralType'>()
  })

  describe('ObjectLiteralTypeData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
