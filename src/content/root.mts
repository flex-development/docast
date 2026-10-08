/**
 * @file Content - root
 * @module docast/content/root
 */

import type { CodeSegment, Comment } from '@flex-development/docast'

/**
 * Union of registered docast nodes that can occur where source file content
 * is expected.
 *
 * To register custom docast nodes, augment {@linkcode RootContentMap}.\
 * They will be added to this union automatically.
 */
type RootContent = RootContentMap[keyof RootContentMap]

/**
 * Registry of docast nodes that can occur where {@linkcode RootContent}
 * is expected.
 *
 * This interface can be augmented to register custom nodes.
 *
 * @example
 *  declare module '@flex-development/docast' {
 *    interface RootContentMap {
 *      custom: CustomNode
 *    }
 *  }
 */
interface RootContentMap {
  codeSegment: CodeSegment
  comment: Comment
}

export type { RootContent, RootContentMap }
