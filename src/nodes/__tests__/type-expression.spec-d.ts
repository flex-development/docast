/**
 * @file Type Tests - TypeExpression
 * @module docast/nodes/tests/unit-d/TypeExpression
 */

import type { Optional } from '@flex-development/tutils'
import type Literal from '../literal'
import type {
  default as TestSubject,
  TypeExpressionData
} from '../type-expression'

describe('unit-d:nodes/TypeExpression', () => {
  it('should extend Literal', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<Literal>()
  })

  it('should match [data?: Optional<TypeExpressionData>]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<TypeExpressionData>>()
  })

  it('should match [type: "type-expression"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'type-expression'>()
  })
})
