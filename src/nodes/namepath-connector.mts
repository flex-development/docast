/**
 * @file Nodes - NamepathConnector
 * @module docast/nodes/NamepathConnector
 */

import type {
  Data,
  Literal,
  SerializedNamepathConnector
} from '@flex-development/docast'

/**
 * Info associated with namepath connectors.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface NamepathConnectorData extends Data {}

/**
 * A namepath connector.
 *
 * @see {@linkcode Literal}
 *
 * @extends {Literal}
 */
interface NamepathConnector extends Literal {
  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode NamepathConnectorData}
   *
   * @override
   */
  data?: NamepathConnectorData | undefined

  /**
   * The node type.
   *
   * @override
   */
  type: 'namepathConnector'

  /**
   * The serialized connector.
   *
   * @see {@linkcode SerializedNamepathConnector}
   *
   * @override
   */
  value: SerializedNamepathConnector
}

export type { NamepathConnector as default, NamepathConnectorData }
