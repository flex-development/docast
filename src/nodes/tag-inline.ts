/**
 * @file Nodes - InlineTag
 * @module docast/nodes/InlineTag
 */

import type { Type } from '#src/enums'
import type { Position } from '#src/interfaces'
import type unist from 'unist'
import type Node from './node'

/**
 * **InlineTag** ([**Node**][1]) represents inline metadata in a docblock
 * comment.
 *
 * **InlineTag** can be used in [**implicit description**][2] and [**block
 * tag**][3] nodes. It cannot contain any children &mdash; it is a [*leaf*][4].
 *
 * [1]: {@link ./node.ts}
 * [2]: {@link ./implicit-description.ts}
 * [3]: {@link ./tag-block.ts}
 * [4]: https://github.com/syntax-tree/unist#leaf
 *
 * @template Data - Information from the ecosystem
 *
 * @extends {Node<Data>}
 */
interface InlineTag<Data extends unist.Data = unist.Data> extends Node<Data> {
  /**
   * Location of node in source document.
   */
  position: Position

  /**
   * Tag name.
   */
  tag: string

  /**
   * Node variant.
   */
  type: Type.INLINE_TAG

  /**
   * Tag as parsed from [**implicit description**][1] or [**block tag**][2].
   *
   * [1]: {@link ./implicit-description.ts}
   * [2]: {@link ./block-tag.ts}
   */
  value: string
}

export type { InlineTag as default }
