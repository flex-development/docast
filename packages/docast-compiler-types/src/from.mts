/**
 * @file From
 * @module docast-compiler-types/From
 */

import type { Point } from '@flex-development/docmark-util-types'

/**
 * The point before the first character in the content.
 *
 * @see {@linkcode Point}
 */
type From = Omit<Point, '_bufferIndex' | '_index'>

export type { From as default }
