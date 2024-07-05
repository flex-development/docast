/**
 * @file Type Tests - TypeOperation
 * @module docast/nodes/tests/unit-d/TypeOperation
 */

import type { Data, Parent, TypeOperator } from '@flex-development/docast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../type-operation'

describe('unit-d:nodes/TypeOperation', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.TypeOperationData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [data?: TypeOperationData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [operator: TypeOperator]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('operator')
      .toEqualTypeOf<TypeOperator>()
  })

  it('should match [type: "typeOperation"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'typeOperation'>()
  })

  describe('TypeOperationData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
