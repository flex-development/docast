/**
 * @file Type Tests - typeExpression
 * @module docast/content/tests/unit-d/typeExpression
 */

import type { NodeObject } from '#tests/types'
import type {
  ArrayType,
  AssertionPredicate,
  BigIntLiteral,
  BooleanLiteral,
  ConditionalType,
  ConstructorType,
  FunctionType,
  GenericType,
  Identifier,
  InferType,
  IntersectionType,
  NonNullableType,
  NullableType,
  NullLiteral,
  NumberLiteral,
  ObjectLiteralType,
  OptionalType,
  ParenthesizedType,
  PropertyAccessType,
  StringLiteral,
  Super,
  TemplateLiteral,
  This,
  TupleType,
  TypeOperation,
  TypePredicate,
  TypeSymbol,
  UndefinedLiteral,
  UnionType,
  VariadicType
} from '@flex-development/docast'
import type * as TestSubject from '../type-expression'

describe('unit-d:content/typeExpression', () => {
  describe('TypeExpression', () => {
    it('should equal TypeExpressionMap[keyof TypeExpressionMap]', () => {
      // Arrange
      type K = keyof TestSubject.TypeExpressionMap
      type Expect = TestSubject.TypeExpressionMap[K]

      // Expect
      expectTypeOf<TestSubject.TypeExpression>().toEqualTypeOf<Expect>
    })
  })

  describe('TypeExpressionMap', () => {
    it('should match NodeObject<ArrayType>', () => {
      expectTypeOf<TestSubject.TypeExpressionMap>()
        .toMatchTypeOf<NodeObject<ArrayType>>()
    })

    it('should match NodeObject<AssertionPredicate>', () => {
      expectTypeOf<TestSubject.TypeExpressionMap>()
        .toMatchTypeOf<NodeObject<AssertionPredicate>>()
    })

    it('should match NodeObject<BigIntLiteral>', () => {
      expectTypeOf<TestSubject.TypeExpressionMap>()
        .toMatchTypeOf<NodeObject<BigIntLiteral>>()
    })

    it('should match NodeObject<BooleanLiteral>', () => {
      expectTypeOf<TestSubject.TypeExpressionMap>()
        .toMatchTypeOf<NodeObject<BooleanLiteral>>()
    })

    it('should match NodeObject<ConditionalType>', () => {
      expectTypeOf<TestSubject.TypeExpressionMap>()
        .toMatchTypeOf<NodeObject<ConditionalType>>()
    })

    it('should match NodeObject<ConstructorType>', () => {
      expectTypeOf<TestSubject.TypeExpressionMap>()
        .toMatchTypeOf<NodeObject<ConstructorType>>()
    })

    it('should match NodeObject<FunctionType>', () => {
      expectTypeOf<TestSubject.TypeExpressionMap>()
        .toMatchTypeOf<NodeObject<FunctionType>>()
    })

    it('should match NodeObject<GenericType>', () => {
      expectTypeOf<TestSubject.TypeExpressionMap>()
        .toMatchTypeOf<NodeObject<GenericType>>()
    })

    it('should match NodeObject<Identifier>', () => {
      expectTypeOf<TestSubject.TypeExpressionMap>()
        .toMatchTypeOf<NodeObject<Identifier>>()
    })

    it('should match NodeObject<InferType>', () => {
      expectTypeOf<TestSubject.TypeExpressionMap>()
        .toMatchTypeOf<NodeObject<InferType>>()
    })

    it('should match NodeObject<IntersectionType>', () => {
      expectTypeOf<TestSubject.TypeExpressionMap>()
        .toMatchTypeOf<NodeObject<IntersectionType>>()
    })

    it('should match NodeObject<NonNullableType>', () => {
      expectTypeOf<TestSubject.TypeExpressionMap>()
        .toMatchTypeOf<NodeObject<NonNullableType>>()
    })

    it('should match NodeObject<NullLiteral>', () => {
      expectTypeOf<TestSubject.TypeExpressionMap>()
        .toMatchTypeOf<NodeObject<NullLiteral>>()
    })

    it('should match NodeObject<NullableType>', () => {
      expectTypeOf<TestSubject.TypeExpressionMap>()
        .toMatchTypeOf<NodeObject<NullableType>>()
    })

    it('should match NodeObject<NumberLiteral>', () => {
      expectTypeOf<TestSubject.TypeExpressionMap>()
        .toMatchTypeOf<NodeObject<NumberLiteral>>()
    })

    it('should match NodeObject<ObjectLiteralType>', () => {
      expectTypeOf<TestSubject.TypeExpressionMap>()
        .toMatchTypeOf<NodeObject<ObjectLiteralType>>()
    })

    it('should match NodeObject<OptionalType>', () => {
      expectTypeOf<TestSubject.TypeExpressionMap>()
        .toMatchTypeOf<NodeObject<OptionalType>>()
    })

    it('should match NodeObject<ParenthesizedType>', () => {
      expectTypeOf<TestSubject.TypeExpressionMap>()
        .toMatchTypeOf<NodeObject<ParenthesizedType>>()
    })

    it('should match NodeObject<PropertyAccessType>', () => {
      expectTypeOf<TestSubject.TypeExpressionMap>()
        .toMatchTypeOf<NodeObject<PropertyAccessType>>()
    })

    it('should match NodeObject<StringLiteral>', () => {
      expectTypeOf<TestSubject.TypeExpressionMap>()
        .toMatchTypeOf<NodeObject<StringLiteral>>()
    })

    it('should match NodeObject<Super>', () => {
      expectTypeOf<TestSubject.TypeExpressionMap>()
        .toMatchTypeOf<NodeObject<Super>>()
    })

    it('should match NodeObject<TemplateLiteral>', () => {
      expectTypeOf<TestSubject.TypeExpressionMap>()
        .toMatchTypeOf<NodeObject<TemplateLiteral>>()
    })

    it('should match NodeObject<This>', () => {
      expectTypeOf<TestSubject.TypeExpressionMap>()
        .toMatchTypeOf<NodeObject<This>>()
    })

    it('should match NodeObject<TupleType>', () => {
      expectTypeOf<TestSubject.TypeExpressionMap>()
        .toMatchTypeOf<NodeObject<TupleType>>()
    })

    it('should match NodeObject<TypeOperation>', () => {
      expectTypeOf<TestSubject.TypeExpressionMap>()
        .toMatchTypeOf<NodeObject<TypeOperation>>()
    })

    it('should match NodeObject<TypePredicate>', () => {
      expectTypeOf<TestSubject.TypeExpressionMap>()
        .toMatchTypeOf<NodeObject<TypePredicate>>()
    })

    it('should match NodeObject<TypeSymbol>', () => {
      expectTypeOf<TestSubject.TypeExpressionMap>()
        .toMatchTypeOf<NodeObject<TypeSymbol>>()
    })

    it('should match NodeObject<UndefinedLiteral>', () => {
      expectTypeOf<TestSubject.TypeExpressionMap>()
        .toMatchTypeOf<NodeObject<UndefinedLiteral>>()
    })

    it('should match NodeObject<UnionType>', () => {
      expectTypeOf<TestSubject.TypeExpressionMap>()
        .toMatchTypeOf<NodeObject<UnionType>>()
    })

    it('should match NodeObject<VariadicType>', () => {
      expectTypeOf<TestSubject.TypeExpressionMap>()
        .toMatchTypeOf<NodeObject<VariadicType>>()
    })
  })
})
