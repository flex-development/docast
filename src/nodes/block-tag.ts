/**
 * @file Nodes - BlockTag
 * @module docast/nodes/BlockTag
 */

import type { BlockTagContent } from '#src/content'
import type { Data } from '#src/interfaces'
import type { Tag } from '#src/mixins'
import type { Optional } from '@flex-development/tutils'
import type Parent from './parent'
import type TypeExpression from './type-expression'

/**
 * Info associated with block tag nodes.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface BlockTagData extends Data {}

/**
 * Top-level metadata.
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
   * Data associated with block tag.
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
