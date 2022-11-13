/**
 * @file Interfaces - Position
 * @module docast/interfaces/Position
 */

import type unist from 'unist'
import type Point from './point'

/**
 * Location of a node in a source [*file*][1].
 *
 * [1]: https://github.com/syntax-tree/unist#file
 *
 * @see https://github.com/syntax-tree/unist#position
 *
 * @extends {unist.Position}
 */
interface Position extends unist.Position {
  end: Point
  start: Point
}

export type { Position as default }
