/**
 * @file Content - inlineTag
 * @module docast/content/inlineTag
 */

import type { Identifier, PhrasingContentMap } from '@flex-development/docast'

/**
 * Union of registered docast nodes that can occur where inline tag content
 * is expected.
 *
 * To register custom docast nodes, augment {@linkcode InlineTagContentMap}.\
 * They will be added to this union automatically.
 */
type InlineTagContent = InlineTagContentMap[keyof InlineTagContentMap]

/**
 * Registry of nodes that can occur where {@linkcode InlineTagContent}
 * is expected.
 *
 * This interface can be augmented to register custom nodes.
 *
 * @example
 *  declare module '@flex-development/docast' {
 *    interface InlineTagContentMap {
 *      custom: CustomNode
 *    }
 *  }
 *
 * @extends {PhrasingContentMap}
 */
interface InlineTagContentMap extends PhrasingContentMap {
  identifier: Identifier
  inlineTag: never
}

export type { InlineTagContent, InlineTagContentMap }
