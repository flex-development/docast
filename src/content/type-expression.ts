/**
 * @file Content - typeExpression
 * @module docast/content/typeExpression
 */

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

/**
 * Union of registered docast nodes that can occur where a type expression is
 * expected.
 *
 * To register custom docast nodes, augment {@linkcode TypeExpressionMap}. They
 * will be added to this union automatically.
 */
type TypeExpression = TypeExpressionMap[keyof TypeExpressionMap]

/**
 * Registry of nodes that can occur where a {@linkcode TypeExpression} is
 * expected.
 *
 * This interface can be augmented to register custom nodes.
 *
 * @example
 *  declare module '@flex-development/docast' {
 *    interface TypeExpressionMap {
 *      customTypeExpression: CustomTypeExpression
 *    }
 *  }
 */
interface TypeExpressionMap {
  arrayType: ArrayType
  assertionPredicate: AssertionPredicate
  bigint: BigIntLiteral
  boolean: BooleanLiteral
  conditionalType: ConditionalType
  constructorType: ConstructorType
  functionType: FunctionType
  genericType: GenericType
  identifier: Identifier
  inferType: InferType
  intersectionType: IntersectionType
  nonNullableType: NonNullableType
  null: NullLiteral
  nullableType: NullableType
  number: NumberLiteral
  objectLiteralType: ObjectLiteralType
  optionalType: OptionalType
  parenthesizedType: ParenthesizedType
  propertyAccessType: PropertyAccessType
  string: StringLiteral
  super: Super
  templateLiteral: TemplateLiteral
  this: This
  tupleType: TupleType
  typeOperation: TypeOperation
  typePredicate: TypePredicate
  typeSymbol: TypeSymbol
  undefined: UndefinedLiteral
  unionType: UnionType
  variadicType: VariadicType
}

export type { TypeExpression, TypeExpressionMap }
