/**
 * @file Mixins - Tag
 * @module docast/mixins/Tag
 */

import type { TagName } from '@flex-development/docast'

/**
 * Comment metadata.
 *
 * docast distinguishes between two kinds of tags: **block** and **inline**.
 */
interface Tag {
  /**
   * Tag name.
   *
   * @see {@linkcode TagName}
   */
  name: TagName
}

export type { Tag as default }
