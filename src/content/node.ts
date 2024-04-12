/**
 * @file Content - node
 * @module docast/content/node
 */

import type {
  BlockTag,
  Comment,
  Description,
  InlineTag,
  Root,
  TypeExpression
} from '@flex-development/docast'

/**
 * Union of registered docast nodes.
 *
 * To register custom docast nodes, augment {@linkcode NodeMap}. They will be
 * added to this union automatically.
 */
type DocastNode = NodeMap[keyof NodeMap]

/**
 * Registry of docast nodes.
 *
 * This interface can be augmented to register custom node types.
 *
 * @example
 *  declare module '@flex-development/docast' {
 *    interface NodeMap {
 *      customNode: CustomNode
 *    }
 *  }
 */
interface NodeMap {
  blockTag: BlockTag
  comment: Comment
  description: Description
  inlineTag: InlineTag
  root: Root
  typeExpression: TypeExpression
}

export type { DocastNode, NodeMap }
