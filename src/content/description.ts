/**
 * @file Content - Description
 * @module docast/content/Description
 */

import type mdast from 'mdast'
import type { PhrasingContentMap } from './phrasing'

/**
 * Union of registered docast nodes that can occur where description content is
 * expected.
 *
 * To register custom docast nodes, augment {@linkcode DescriptionContentMap}.
 * They will be added to this union automatically.
 */
type DescriptionContent = DescriptionContentMap[keyof DescriptionContentMap]

/**
 * Registry of docast nodes that can occur where {@linkcode DescriptionContent}
 * is expected.
 *
 * This interface can be augmented to register custom node types.
 *
 * @example
 *  declare module '@flex-development/docast' {
 *    interface DescriptionContentMap {
 *      custom: CustomNode
 *    }
 *  }
 *
 * @extends {PhrasingContentMap}
 */
interface DescriptionContentMap extends PhrasingContentMap {
  blockquote: mdast.Blockquote
  definition: mdast.Definition
  footnoteDefinition: mdast.FootnoteDefinition
  list: mdast.List
  listItem: mdast.ListItem
  paragraph: mdast.Paragraph
  table: mdast.Table
  thematicBreak: mdast.ThematicBreak
}

export type { DescriptionContent, DescriptionContentMap }
