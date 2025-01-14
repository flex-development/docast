/**
 * @file Nodes - InlineTag
 * @module docast/nodes/InlineTag
 */

import type { Data, Literal, Tag } from '@flex-development/docast'

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
  data?: InlineTagData | undefined

  /**
   * Node type.
   */
  type: 'inlineTag'

  /**
   * Plain-text value.
   */
  value: string
}

export type { InlineTag as default, InlineTagData }
