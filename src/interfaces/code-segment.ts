/**
 * @file Interfaces - CodeSegment
 * @module docast/interfaces/CodeSegment
 */

import type { Nilable, NumberString } from '@flex-development/tutils'
import type Position from './position'

/**
 * The segment of code a comment documents.
 */
interface CodeSegment {
  /**
   * Code segment name.
   */
  identifier: string

  /**
   * Code syntax kind.
   */
  kind: NumberString

  /**
   * Parent code.
   */
  parent?: Nilable<CodeSegment>

  /**
   * [Position][1] of code in source file.
   *
   * [1]: https://github.com/syntax-tree/unist#position
   *
   * @see {@linkcode Position}
   */
  position: Position
}

export type { CodeSegment as default }
