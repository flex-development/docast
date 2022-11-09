/**
 * @file Nodes - Node
 * @module docast/nodes/Node
 */

import type { Type } from '#src/enums'
import type { Position } from '#src/interfaces'
import type unist from 'unist'

/**
 * **Node** ([**UnistNode**][1]) is a syntactic unit in docast syntax trees.
 *
 * [1]: https://github.com/syntax-tree/unist#node
 *
 * @template Data - Information from the ecosystem
 *
 * @extends {unist.Node<Data>}
 */
interface Node<Data extends unist.Data = unist.Data> extends unist.Node<Data> {
  /**
   * Information from the ecosystem.
   *
   * @see https://github.com/syntax-tree/unist#data
   */
  data?: Data

  /**
   * Location of node in source document.
   *
   * **Note**: Should not be defined if node is [*generated*][1].
   *
   * [1]: https://github.com/syntax-tree/unist#generated
   *
   * @see [`Position`]({@link ../interfaces/position.ts})
   */
  position?: Position

  /**
   * Node variant.
   *
   * @see [`Type`]({@link ../enums/type.ts})
   */
  type: Type
}

export type { Node as default }
