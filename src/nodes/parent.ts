/**
 * @file Nodes - Parent
 * @module docast/nodes/Parent
 */

import type { Type } from '#src/enums'
import type unist from 'unist'
import type Comment from './comment'
import type ImplicitDescription from './implicit-description'
import type Node from './node'
import type BlockTag from './tag-block'
import type InlineTag from './tag-inline'

/**
 * **Parent** ([**UnistParent**][1]) represents an abstract interface in docast
 * containing other nodes (said to be [*children*][2]).
 *
 * [1]: https://github.com/syntax-tree/unist#parent
 * [2]: https://github.com/syntax-tree/unist#child
 *
 * @template Child - Child node type
 * @template Data - Information from the ecosystem
 *
 * @extends {Node<Data>}
 */
interface Parent<
  Child extends BlockTag | Comment | ImplicitDescription | InlineTag =
    | BlockTag
    | Comment
    | ImplicitDescription
    | InlineTag,
  Data extends unist.Data = unist.Data
> extends Node<Data> {
  /**
   * List representing [*children*][1].
   *
   * [1]: https://github.com/syntax-tree/unist#child
   */
  children: Child[]

  /**
   * Node variant.
   *
   * @see [`Type`]({@link ../enums/type.ts})
   */
  type: Type.BLOCK_TAG | Type.COMMENT | Type.IMPLICIT_DESCRIPTION | Type.ROOT
}

export type { Parent as default }
