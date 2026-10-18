/**
 * @file Nodes - Literal
 * @module docast/nodes/Literal
 */

import type { Node } from '@flex-development/docast'

/**
 * An abstract docast node containing a scalar value.
 *
 * @see {@linkcode Node}
 *
 * @extends {Node}
 */
interface Literal extends Node {
  /**
   * The plain value.
   */
  value: bigint | boolean | number | string | null | undefined
}

export type { Literal as default }
