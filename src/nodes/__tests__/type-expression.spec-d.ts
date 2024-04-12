/**
 * @file Type Tests - TypeExpression
 * @module docast/nodes/tests/unit-d/TypeExpression
 */

import type { Data, Literal } from '@flex-development/docast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../type-expression'

describe('unit-d:nodes/TypeExpression', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.TypeExpressionData

  it('should extend Literal', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Literal>()
  })

  it('should match [data?: Optional<TypeExpressionData>]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "typeExpression"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'typeExpression'>()
  })

  describe('TypeExpressionData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
