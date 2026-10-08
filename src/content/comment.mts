/**
 * @file Content - comment
 * @module docast/content/comment
 */

import type {
  Summary,
  SummaryContentMap,
  Tag
} from '@flex-development/docast'

/**
 * Union of registered docast nodes that can occur where comment content
 * is expected.
 *
 * To register custom docast nodes, augment {@linkcode CommentContentMap}.\
 * They will be added to this union automatically.
 */
type CommentContent = CommentContentMap[keyof CommentContentMap]

/**
 * Union of registered docast nodes that can occur where freeform comment
 * content is expected. This content does include a {@linkcode Summary}.
 *
 * To register custom docast nodes, augment {@linkcode CommentContentMap}.\
 * They will be added to this union automatically.
 */
type FreeformCommentContent = Exclude<CommentContent, Summary>

/**
 * Registry of docast nodes that can occur where {@linkcode CommentContent}
 * is expected.
 *
 * This interface can be augmented to register custom nodes.
 *
 * @example
 *  declare module '@flex-development/docast' {
 *    interface CommentContentMap {
 *      custom: CustomNode
 *    }
 *  }
 *
 * @extends {SummaryContentMap}
 */
interface CommentContentMap extends SummaryContentMap {
  summary: Summary
  tag: Tag
}

export type { CommentContent, CommentContentMap, FreeformCommentContent }
