/**
 * @file Mixins - Tag
 * @module docast/mixins/Tag
 */

/**
 * Metadata associated with a docblock comment.
 */
interface Tag {
  /**
   * Tag name.
   */
  name: string

  /**
   * Parsed tag.
   */
  tag: string
}

export type { Tag as default }
