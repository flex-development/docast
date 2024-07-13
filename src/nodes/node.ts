/**
 * @file Nodes - Node
 * @module docast/nodes/Node
 */

import type { Data } from '@flex-development/docast'
import type unist from 'unist'

/**
 * Abstract docast node.
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
   */
  data?: Data | undefined

  /**
   * Location of node in source document.
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
