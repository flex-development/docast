/**
 * @file Nodes - Tag
 * @module docast/nodes/Tag
 */

import type {
  Data,
  Namepath,
  Parent,
  TagName,
  TypeMetadata,
  UntypedTagContent
} from '@flex-development/docast'

/**
 * Info associated with tags.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface TagData extends Data {}

/**
 * Top-level metadata.
 *
 * Tags should be the only element on their line, except in cases where special
 * meaning is assigned to succeeding text.
 * All text following a tag name, up until the start of the next tag name or a
 * comment closer, is considered to be **tag content**.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface Tag extends Parent {
  /**
   * The list of children.
   *
   * @see {@linkcode TagName}
   * @see {@linkcode TypeMetadata}
   * @see {@linkcode UntypedTagContent}
   *
   * @override
   */
  children:
    | [name: TagName, ...UntypedTagContent[]]
    | [name: TagName, Namepath | TypeMetadata, ...UntypedTagContent[]]
    | [
      name: TagName,
      type: TypeMetadata,
      namepath: Namepath,
      ...UntypedTagContent[]
    ]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode TagData}
   *
   * @override
   */
  data?: TagData | undefined

  /**
   * The node type.
   *
   * @override
   */
  type: 'tag'
}

export type { Tag as default, TagData }
