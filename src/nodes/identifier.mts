/**
 * @file Nodes - Identifier
 * @module docast/nodes/Identifier
 */

import type { Data, Literal } from '@flex-development/docast'

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
 * @see {@linkcode Literal}
 *
 * @extends {Literal}
 */
interface Identifier extends Literal {
  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode IdentifierData}
   *
   * @override
   */
  data?: IdentifierData | undefined

  /**
   * The node type.
   *
   * @override
   */
  type: 'identifier'

  /**
   * The identifier text.
   */
  value: string
}

export type { Identifier as default, IdentifierData }
