/**
 * @file Content - BlockTag
 * @module docast/content/BlockTag
 */

import type { TypeExpression } from '#src/nodes'
import type { PhrasingContentMap } from './phrasing'

/**
 * Union of registered docast nodes that can occur where block tag content is
 * expected.
 *
 * To register custom docast nodes, augment {@linkcode BlockTagContentMap}. They
 * will be added to this union automatically.
 */
type BlockTagContent = BlockTagContentMap[keyof BlockTagContentMap]

/**
 * Registry of nodes that can occur where {@linkcode BlockTagContent} is
 * expected.
 *
 * This interface can be augmented to register custom node types.
 *
 * @example
 *  declare module '@flex-development/docast' {
 *    interface BlockContentMap {
 *      custom: CustomNode
 *    }
 *  }
 *
 * @extends {PhrasingContentMap}
 */
interface BlockTagContentMap extends PhrasingContentMap {
  typeExpression: TypeExpression
}

export type { BlockTagContent, BlockTagContentMap }
