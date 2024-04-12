/**
 * @file Content - phrasing
 * @module docast/content/phrasing
 */

import type { InlineTag } from '@flex-development/docast'
import type mdast from 'mdast'

declare module 'mdast' {
  interface PhrasingContentMap {
    inlineTag: InlineTag
  }
}

/**
 * Union of registered docast nodes that can occur where phrasing content is
 * expected.
 *
 * To register custom docast nodes, augment {@linkcode PhrasingContentMap}. They
 * will be added to this union automatically.
 */
type PhrasingContent = PhrasingContentMap[keyof PhrasingContentMap]

/**
 * Registry of docast nodes that can occur where {@linkcode PhrasingContent} is
 * expected.
 *
 * This interface can be augmented to register custom node types.
 *
 * @example
 *  declare module '@flex-development/docast' {
 *    interface PhrasingContentMap {
 *      custom: CustomNode
 *    }
 *  }
 *
 * @extends {mdast.PhrasingContentMap}
 */
interface PhrasingContentMap extends mdast.PhrasingContentMap {}

export type { PhrasingContent, PhrasingContentMap }
