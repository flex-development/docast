/**
 * @file Nodes - Node
 * @module docast/nodes/Node
 */

import type { Data, Position } from '@flex-development/docast'
import type { Optional } from '@flex-development/tutils'
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
  data?: Optional<Data>

  /**
   * Location of node in source document.
   *
   * **Note**: Should not be defined if node is [*generated*][1].
   *
   * [1]: https://github.com/syntax-tree/unist#generated
   *
   * @see {@linkcode Position}
   */
  position?: Optional<Position>
}

export type { Node as default }
