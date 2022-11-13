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
 * @see https://github.com/syntax-tree/unist#point
 *
 * @extends {Required<unist.Point>}
 */
interface Point extends Required<unist.Point> {}

export type { Point as default }
