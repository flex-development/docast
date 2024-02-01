/**
 * @file Content - Phrasing
 * @module docast/content/Phrasing
 */

import type { InlineTag } from '#src/nodes'
import type mdast from 'mdast'

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
interface PhrasingContentMap extends mdast.PhrasingContentMap {
  code: mdast.Code
  inlineTag: InlineTag
}

export type { PhrasingContent, PhrasingContentMap }
