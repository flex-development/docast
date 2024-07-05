/**
 * @file Nodes - Identifier
 * @module docast/nodes/Identifier
 */

import type { Data, Node } from '@flex-development/docast'

/**
 * Info associated with identifiers.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface IdentifierData extends Data {}

/**
 * An identifier.
 *
 * @example
 *  foo
 *
 * @see {@linkcode Node}
 *
 * @extends {Node}
 */
interface Identifier extends Node {
  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode IdentifierData}
   */
  data?: IdentifierData | undefined

  /**
   * Identifier name.
   */
  name: string

  /**
   * Boolean indicating private identifier.
   */
  private?: boolean | null | undefined

  /**
   * Node type.
   */
  type: 'identifier'
}

export type { Identifier as default, IdentifierData }
