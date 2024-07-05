/**
 * @file Content - content
 * @module docast/content/content
 */

import type {
  BlockTagContent,
  DescriptionContent,
  FlowContent,
  PhrasingContent,
  TypeExpression
} from '@flex-development/docast'

/**
 * Union of registered content model nodes.
 *
 * Nodes are grouped by content type, if applicable. Each node in docast, with
 * the exception of `Comment`, falls into one or more categories of `Content`.
 *
 * @see {@linkcode BlockTagContent}
 * @see {@linkcode DescriptionContent}
 * @see {@linkcode FlowContent}
 * @see {@linkcode PhrasingContent}
 * @see {@linkcode TypeExpression}
 */
type Content =
  | BlockTagContent
  | DescriptionContent
  | FlowContent
  | PhrasingContent
  | TypeExpression

export type { Content as default }
