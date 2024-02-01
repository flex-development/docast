/**
 * @file Content - Flow
 * @module docast/content/Flow
 */

import type { BlockTag, Description } from '#src/nodes'

/**
 * Union of registered docast nodes that can occur where `Comment` flow content
 * is expected.
 *
 * To register custom docast nodes, augment {@linkcode FlowContentMap}. They
 * will be added to this union automatically.
 */
type FlowContent = FlowContentMap[keyof FlowContentMap]

/**
 * Registry of docast nodes that can occur where {@linkcode FlowContent} is
 * expected.
 *
 * This interface can be augmented to register custom node types.
 *
 * @example
 *  declare module '@flex-development/docast' {
 *    interface FlowContentMap {
 *      custom: CustomNode
 *    }
 *  }
 */
interface FlowContentMap {
  blockTag: BlockTag
  description: Description
}

export type { FlowContent, FlowContentMap }
