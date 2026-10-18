/**
 * @file Nodes - Node
 * @module docast/nodes/Node
 */

import type { Data } from '@flex-development/docast'
import type unist from 'unist'

/**
 * An abstract docast node.
 *
 * @see {@linkcode unist.Node}
 *
 * @extends {unist.Node}
 */
interface Node extends unist.Node {
  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode Data}
   *
   * @override
   */
  data?: Data | undefined

  /**
   * The location of the node in the source content.
   *
   * > 👉 Nodes that are [*generated*][generated] must not have a position.
   *
   * [generated]: https://github.com/syntax-tree/unist#generated
   *
   * @see {@linkcode unist.Position}
   */
  position?: unist.Position | undefined
}

export type { Node as default }
