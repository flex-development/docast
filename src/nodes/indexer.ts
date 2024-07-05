/**
 * @file Nodes - Indexer
 * @module docast/nodes/Indexer
 */

import type {
  Data,
  Identifier,
  Parent,
  ReturnType
} from '@flex-development/docast'

/**
 * Info associated with index signature operations.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface IndexerData extends Data {}

/**
 * An index signature operation.
 *
 * @example
 *  [index: number]
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface Indexer extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Identifier}
   * @see {@linkcode ReturnType}
   */
  children: [name: Identifier, type: ReturnType]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode IndexerData}
   */
  data?: IndexerData | undefined

  /**
   * Node type.
   */
  type: 'indexer'
}

export type { Indexer as default, IndexerData }
