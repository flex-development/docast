/**
 * @file Nodes - InlineTag
 * @module docast/nodes/InlineTag
 */

import type {
  Data,
  InlineTagContent,
  Parent,
  TagName
} from '@flex-development/docast'

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
 * curly braces (`{` and `}`).
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface InlineTag extends Parent {
  /**
   * The list of children.
   *
   * @see {@linkcode InlineTagContent}
   * @see {@linkcode TagName}
   *
   * @override
   */
  children: [name: TagName, ...InlineTagContent[]]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode InlineTagData}
   *
   * @override
   */
  data?: InlineTagData | undefined

  /**
   * The tag name identifier.
   */
  name: string

  /**
   * The node type.
   *
   * @override
   */
  type: 'inlineTag'
}

export type { InlineTag as default, InlineTagData }
