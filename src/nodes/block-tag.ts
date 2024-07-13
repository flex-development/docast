/**
 * @file Nodes - BlockTag
 * @module docast/nodes/BlockTag
 */

import type {
  BlockTagContent,
  Data,
  Parent,
  Tag,
  TypeMetadata
} from '@flex-development/docast'

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
 * tag name, up until the start of the next block tag name, or comment closer,
 * is considered to be the block tag's **tag content**.
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
    | Exclude<BlockTagContent, TypeMetadata>[]
    | [type: TypeMetadata, ...Exclude<BlockTagContent, TypeMetadata>[]]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode BlockTagData}
   */
  data?: BlockTagData | undefined

  /**
   * Node type.
   */
  type: 'blockTag'
}

export type { BlockTagData, BlockTag as default }
