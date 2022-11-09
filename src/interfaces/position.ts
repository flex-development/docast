/**
 * @file Interfaces - Position
 * @module docast/interfaces/Position
 */

import type unist from 'unist'

/**
 * Location of a node in a source file.
 *
 * @see https://github.com/syntax-tree/unist#position
 *
 * @extends {unist.Position}
 */
interface Position extends unist.Position {
  end: Required<unist.Point>
  start: Required<unist.Point>
}

export type { Position as default }
