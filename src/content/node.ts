/**
 * @file Content - node
 * @module docast/content/node
 */

import type {
  BlockTag,
  CallSignature,
  Comment,
  ComputedPropertyName,
  ComputedType,
  ConstructSignature,
  Description,
  EllipsisToken,
  ExtendsPredicate,
  Indexer,
  IndexSignature,
  InlineTag,
  MappedSignature,
  Mapper,
  MethodSignature,
  MinusToken,
  Modifier,
  ModifierList,
  Parameter,
  ParameterList,
  PlusToken,
  PropertySignature,
  ReturnType,
  Root,
  TemplateElement,
  TemplatePlaceholder,
  TupleElement,
  TypeAnnotation,
  TypeArgumentList,
  TypeExpressionMap,
  TypeMetadata,
  TypeParameter,
  TypeParameterList
} from '@flex-development/docast'

/**
 * Union of registered docast nodes.
 *
 * To register custom docast nodes, augment {@linkcode NodeMap}. They will be
 * added to this union automatically.
 */
type DocastNode = NodeMap[keyof NodeMap]

/**
 * Registry of docast nodes.
 *
 * This interface can be augmented to register custom nodes.
 *
 * @example
 *  declare module '@flex-development/docast' {
 *    interface NodeMap {
 *      customNode: CustomNode
 *    }
 *  }
 *
 * @extends {TypeExpressionMap}
 */
interface NodeMap extends TypeExpressionMap {
  blockTag: BlockTag
  callSignature: CallSignature
  comment: Comment
  computedPropertyName: ComputedPropertyName
  computedType: ComputedType
  constructSignature: ConstructSignature
  description: Description
  ellipsisToken: EllipsisToken
  extendsPredicate: ExtendsPredicate
  indexSignature: IndexSignature
  indexer: Indexer
  inlineTag: InlineTag
  mappedSignature: MappedSignature
  mapper: Mapper
  methodSignature: MethodSignature
  minusToken: MinusToken
  modifier: Modifier
  modifierList: ModifierList
  parameter: Parameter
  parameterList: ParameterList
  plusToken: PlusToken
  propertySignature: PropertySignature
  returnType: ReturnType
  root: Root
  templateElement: TemplateElement
  templatePlaceholder: TemplatePlaceholder
  tupleElement: TupleElement
  typeAnnotation: TypeAnnotation
  typeArgumentList: TypeArgumentList
  typeMetadata: TypeMetadata
  typeParameter: TypeParameter
  typeParameterList: TypeParameterList
}

export type { DocastNode, NodeMap }
