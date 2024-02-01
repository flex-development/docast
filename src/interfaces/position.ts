/**
 * @file Interfaces - Position
 * @module docast/interfaces/Position
 */

import type Point from './point'

/**
 * Location of a node in a source [*file*][1].
 *
 * A position is a range between two points.
 *
 * [1]: https://github.com/syntax-tree/unist#file
 */
interface Position {
  /**
   * Index of first character after parsed source region.
   *
   * @see {@linkcode Point}
   */
  end: Point

  /**
   * Index of first character in parsed source region.
   *
   * @see {@linkcode Point}
   */
  start: Point
}

export type { Position as default }
