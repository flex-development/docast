/**
 * @file Content - node
 * @module docast/content/node
 */

import type {
  CodeSegment,
  Comment,
  CommentCloser,
  CommentLinePrefix,
  CommentMarker,
  CommentOpener,
  CommentPadding,
  Identifier,
  InlineTag,
  Namepath,
  NamepathConnector,
  Root,
  Summary,
  Tag,
  TagName,
  TypeExpressionMap,
  TypeMetadata
} from '@flex-development/docast'

/**
 * Union of registered docast nodes.
 *
 * To register custom docast nodes, augment {@linkcode NodeMap}.\
 * They will be added to this union automatically.
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
  codeSegment: CodeSegment
  comment: Comment
  commentCloser: CommentCloser
  commentLinePrefix: CommentLinePrefix
  commentMarker: CommentMarker
  commentOpener: CommentOpener
  commentPadding: CommentPadding
  identifier: Identifier
  inlineTag: InlineTag
  namepath: Namepath
  namepathConnector: NamepathConnector
  root: Root
  summary: Summary
  tag: Tag
  tagName: TagName
  typeMetadata: TypeMetadata
}

export type { DocastNode, NodeMap }
