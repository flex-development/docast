/**
 * @file Nodes - This
 * @module docast/nodes/This
 */

import type { Data, Node } from '@flex-development/docast'

/**
 * Info associated with `this` keywords.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface ThisData extends Data {}

/**
 * The `this` keyword.
 *
 * @see {@linkcode Node}
 *
 * @extends {Node}
 */
interface This extends Node {
  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode ThisData}
   */
  data?: ThisData | undefined

  /**
   * Node type.
   */
  type: 'this'
}

export type { This as default, ThisData }
