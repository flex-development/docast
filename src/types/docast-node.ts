/**
 * @file Type Definitions - DocastNode
 * @module docast/types/DocastNode
 */

import type {
  BlockTag,
  Comment,
  Description,
  InlineTag,
  TypeExpression
} from '#src/nodes'

/**
 * A native docast node.
 */
type DocastNode = BlockTag | Comment | Description | InlineTag | TypeExpression

export type { DocastNode as default }
