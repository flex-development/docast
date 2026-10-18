/**
 * @file Nodes - Namepath
 * @module docast/nodes/Namepath
 */

import type {
  Data,
  Identifier,
  NamepathConnector,
  Parent
} from '@flex-development/docast'

/**
 * Info associated with namepaths.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface NamepathData extends Data {
  /**
   * Whether the namepath was marked as optional.
   */
  optional?: boolean | null | undefined
}

/**
 * A namepath.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface Namepath extends Parent {
  /**
   * The list of children.
   *
   * @see {@linkcode Identifier}
   * @see {@linkcode NamepathConnector}
   *
   * @override
   */
  children: [identifier: Identifier, ...(Identifier | NamepathConnector)[]]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode NamepathData}
   *
   * @override
   */
  data?: NamepathData | undefined

  /**
   * The node type.
   *
   * @override
   */
  type: 'namepath'
}

export type { Namepath as default, NamepathData }
