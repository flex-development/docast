/**
 * @file Nodes - InlineTag
 * @module docast/nodes/InlineTag
 */

import type { Data, Literal, Tag } from '@flex-development/docast'
import type { Optional } from '@flex-development/tutils'

/**
 * Info associated with inline tags.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface InlineTagData extends Data {}

/**
 * Inline metadata.
 *
 * Inline tags are denoted by wrapping a tag name and any **tag content** in
 * angle brackets (`{` and `}`).
 *
 * @see {@linkcode Literal}
 * @see {@linkcode Tag}
 *
 * @extends {Literal}
 * @extends {Tag}
 */
interface InlineTag extends Literal, Tag {
  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode InlineTagData}
   */
  data?: Optional<InlineTagData>

  /**
   * Node type.
   */
  type: 'inlineTag'
}

export type { InlineTagData, InlineTag as default }
