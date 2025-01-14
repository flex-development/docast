/**
 * @file Nodes - Literal
 * @module docast/nodes/Literal
 */

import type { Node } from '@flex-development/docast'

/**
 * Abstract docast node containing the smallest possible value.
 *
 * @see {@linkcode Node}
 *
 * @extends {Node}
 */
interface Literal extends Node {
  /**
   * Plain value.
   */
  value: bigint | boolean | number | string | null | undefined
}

export type { Literal as default }
