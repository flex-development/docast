/**
 * @file Interfaces - Context
 * @module docast/interfaces/Context
 */

import type { Nullable } from '@flex-development/tutils'
import type Position from './position'

/**
 * Data representing the segment of code a [`Comment`][1] documents.
 *
 * [1]: {@link ../nodes/comment.ts}
 */
interface Context {
  /**
   * Segment name.
   */
  identifier: string

  /**
   * Segment syntax kind.
   */
  kind: string

  /**
   * Segment members.
   */
  members: string[]

  /**
   * Modifier keywords.
   */
  modifiers: string[]

  /**
   * Segment parent.
   */
  parent: Nullable<string>

  /**
   * [Position][1] of code segment in source file.
   *
   * [1]: https://github.com/syntax-tree/unist#position
   */
  position: Position
}

export type { Context as default }
