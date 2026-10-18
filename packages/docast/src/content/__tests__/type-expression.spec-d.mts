/**
 * @file Type Tests - typeExpression
 * @module docast/content/tests/unit-d/typeExpression
 */

import { describe, expectTypeOf, it } from 'vitest'
import type * as TestSubject from '../type-expression.mts'

describe('unit-d:content/typeExpression', () => {
  describe('TypeExpression', () => {
    it('should equal TypeExpressionMap[keyof TypeExpressionMap]', () => {
      // Arrange
      type K = keyof TestSubject.TypeExpressionMap
      type Expect = TestSubject.TypeExpressionMap[K]

      // Expect
      expectTypeOf<TestSubject.TypeExpression>().toEqualTypeOf<Expect>()
    })
  })

  describe('TypeExpressionMap', () => {
    it('should not register any nodes', () => {
      expectTypeOf<keyof TestSubject.TypeExpressionMap>().toEqualTypeOf<never>()
    })
  })
})
