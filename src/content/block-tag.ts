/**
 * @file Content - blockTag
 * @module docast/content/blockTag
 */

import type {
  PhrasingContentMap,
  TypeMetadata
} from '@flex-development/docast'
import type mdast from 'mdast'

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
 * This interface can be augmented to register custom nodes.
 *
 * @example
 *  declare module '@flex-development/docast' {
 *    interface BlockTagContentMap {
 *      custom: CustomNode
 *    }
 *  }
 *
 * @extends {PhrasingContentMap}
 */
interface BlockTagContentMap extends PhrasingContentMap {
  code: mdast.Code
  typeMetadata: TypeMetadata
}

export type { BlockTagContent, BlockTagContentMap }
