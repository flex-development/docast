/**
 * @file Interfaces - Point
 * @module docast/interfaces/Point
 */

import type unist from 'unist'

/**
 * One place in a source [*file*][1].
 *
 * [1]: https://github.com/syntax-tree/unist#file
 *
 * @see {@linkcode unist.Point}
 *
 * @extends {Required<unist.Point>}
 */
interface Point extends Required<unist.Point> {
  /**
   * Index of character in source file (0-indexed integer).
   */
  offset: number
}

export type { Point as default }
