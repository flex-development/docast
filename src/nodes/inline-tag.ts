/**
 * @file Nodes - InlineTag
 * @module docast/nodes/InlineTag
 */

import type { Data } from '#src/interfaces'
import type { Tag } from '#src/mixins'
import type { Optional } from '@flex-development/tutils'
import type Literal from './literal'

/**
 * Info associated with inline tag nodes.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface InlineTagData extends Data {}

/**
 * Inline metadata.
 *
 * @see {@linkcode Tag}
 *
 * @extends {Literal}
 * @extends {Tag}
 */
interface InlineTag extends Literal, Tag {
  /**
   * Data associated with inline tag.
   *
   * @see {@linkcode InlineTagData}
   */
  data?: Optional<InlineTagData>

  /**
   * Node type.
   */
  type: 'inline-tag'
}

export type { InlineTagData, InlineTag as default }
