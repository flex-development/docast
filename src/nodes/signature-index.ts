/**
 * @file Nodes - IndexSignature
 * @module docast/nodes/IndexSignature
 */

import type {
  Data,
  Indexer,
  ModifierList,
  Parent,
  TypeAnnotation
} from '@flex-development/docast'

/**
 * Info associated with index signatures.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface IndexSignatureData extends Data {}

/**
 * An index signature.
 *
 * @example
 *  [index: number]: string
 * @example
 *  readonly [index: number]: string
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface IndexSignature extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Indexer}
   * @see {@linkcode ModifierList}
   * @see {@linkcode TypeAnnotation}
   */
  children:
    | [modifiers: ModifierList, operation: Indexer, type: TypeAnnotation]
    | [operation: Indexer, type: TypeAnnotation]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode IndexSignatureData}
   */
  data?: IndexSignatureData | undefined

  /**
   * Node type.
   */
  type: 'indexSignature'
}

export type { IndexSignature as default, IndexSignatureData }
