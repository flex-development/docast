/**
 * @file Content - typeExpression
 * @module docast/content/typeExpression
 */

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
interface TypeExpressionMap {}

export type { TypeExpression, TypeExpressionMap }
