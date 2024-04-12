/**
 * @file Content - content
 * @module docast/content/content
 */

import type {
  BlockTagContent,
  DescriptionContent,
  FlowContent,
  PhrasingContent
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
 */
type Content =
  | BlockTagContent
  | DescriptionContent
  | FlowContent
  | PhrasingContent

export type { Content as default }
