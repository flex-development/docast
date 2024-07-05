/**
 * @file Nodes - ConstructSignature
 * @module docast/nodes/ConstructSignature
 */

import type { CallSignature, Data, Parent } from '@flex-development/docast'

/**
 * Info associated with construct signatures.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface ConstructSignatureData extends Data {}

/**
 * A construct signature.
 *
 * @example
 *  new (s: string): SomeObject
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface ConstructSignature extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode CallSignature}
   */
  children: [call: CallSignature]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode ConstructSignatureData}
   */
  data?: ConstructSignatureData | undefined

  /**
   * Node type.
   */
  type: 'constructSignature'
}

export type { ConstructSignatureData, ConstructSignature as default }
