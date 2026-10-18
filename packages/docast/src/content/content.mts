/**
 * @file Content - content
 * @module docast/content/content
 */

import type {
  CommentContent,
  InlineTagContent,
  PhrasingContent,
  RootContent,
  SummaryContent,
  TagContent,
  TypeExpression
} from '@flex-development/docast'

/**
 * Union of registered content model nodes.
 *
 * Nodes are grouped by content type, if applicable.
 * Each node in docast falls into one or more categories of `Content`.
 *
 * @see {@linkcode CommentContent}
 * @see {@linkcode InlineTagContent}
 * @see {@linkcode PhrasingContent}
 * @see {@linkcode RootContent}
 * @see {@linkcode SummaryContent}
 * @see {@linkcode TagContent}
 * @see {@linkcode TypeExpression}
 */
type Content =
  | CommentContent
  | InlineTagContent
  | PhrasingContent
  | RootContent
  | SummaryContent
  | TagContent
  | TypeExpression

export type { Content as default }
