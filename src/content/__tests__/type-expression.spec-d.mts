/**
 * @file Type Tests - typeExpression
 * @module docast/content/tests/unit-d/typeExpression
 */

import type * as TestSubject from '#content/type-expression'

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
      // Arrange
      type K = keyof TestSubject.TypeExpressionMap

      // Expect
      expectTypeOf<TestSubject.TypeExpressionMap[K]>().toEqualTypeOf<never>()
    })
  })
})
