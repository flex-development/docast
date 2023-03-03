/**
 * @file Type Definitions - Child
 * @module docast/types/Child
 */

import type {
  BlockTag,
  Comment,
  ImplicitDescription,
  InlineTag
} from '#src/nodes'

/**
 * [*Child*][1] node types.
 *
 * [1]: https://github.com/syntax-tree/unist#child
 */
type Child = BlockTag | Comment | ImplicitDescription | InlineTag

export type { Child as default }
