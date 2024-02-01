/**
 * @file Content - Content
 * @module docast/content/Content
 */

import type { BlockTagContent } from './block-tag'
import type { DescriptionContent } from './description'
import type { FlowContent } from './flow'
import type { PhrasingContent } from './phrasing'

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
