/**
 * @file Nodes - BlockTag
 * @module docast/nodes/BlockTag
 */

import type {
  BlockTagContent,
  Data,
  Parent,
  Tag,
  TypeExpression
} from '@flex-development/docast'
import type { Optional } from '@flex-development/tutils'

/**
 * Info associated with block tags.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface BlockTagData extends Data {}

/**
 * Top-level metadata.
 *
 * Block tags should be the only element on their line, except in cases where
 * special meaning is assigned to succeeding text. All text following a block
 * tag, up until the start of the next block tag, is considered to be the block
 * tag's **tag content**.
 *
 * @see {@linkcode Parent}
 * @see {@linkcode Tag}
 *
 * @extends {Parent}
 * @extends {Tag}
 */
interface BlockTag extends Parent, Tag {
  /**
   * List of children.
   *
   * @see {@linkcode BlockTagContent}
   */
  children:
    | Exclude<BlockTagContent, TypeExpression>[]
    | [TypeExpression, ...Exclude<BlockTagContent, TypeExpression>[]]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode BlockTagData}
   */
  data?: Optional<BlockTagData>

  /**
   * Node type.
   */
  type: 'blockTag'
}

export type { BlockTagData, BlockTag as default }
