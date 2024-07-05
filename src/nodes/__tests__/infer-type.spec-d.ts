/**
 * @file Type Tests - InferType
 * @module docast/nodes/tests/unit-d/InferType
 */

import type { Data, Parent } from '@flex-development/docast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../infer-type'

describe('unit-d:nodes/InferType', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.InferTypeData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [data?: InferTypeData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "inferType"]', () => {
    expectTypeOf<Subject>().toHaveProperty('type').toEqualTypeOf<'inferType'>()
  })

  describe('InferTypeData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
