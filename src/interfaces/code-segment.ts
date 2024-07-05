/**
 * @file Interfaces - CodeSegment
 * @module docast/interfaces/CodeSegment
 */

import type unist from 'unist'

/**
 * The segment of code a comment documents.
 *
 * This interface can be augmented to register custom fields.
 *
 * @example
 *  declare module '@flex-development/docast' {
 *    interface CodeSegment {
 *      kind: number | string
 *    }
 *  }
 */
interface CodeSegment {
  /**
   * [Position][1] of code segment in source file.
   *
   * [1]: https://github.com/syntax-tree/unist#position
   *
   * @see {@linkcode  unist.Position}
   */
  position: unist.Position

  /**
   * Node type of code segment.
   */
  type: string
}

export type { CodeSegment as default }
