/**
 * @file Content - tag
 * @module docast/content/tag
 */

import type {
  PhrasingContentMap,
  TypeMetadata
} from '@flex-development/docast'
import type mdast from 'mdast'

/**
 * Union of registered docast nodes that can occur where tag content
 * is expected.
 *
 * To register custom docast nodes, augment {@linkcode TagContentMap}.\
 * They will be added to this union automatically.
 */
type TagContent = TagContentMap[keyof TagContentMap]

/**
 * Union of registered docast nodes that can occur where typeless tag content
 * is expected. This content does not contain any {@linkcode TypeMetadata}.
 *
 * To register custom docast nodes, augment {@linkcode TagContentMap}.\
 * They will be added to this union automatically.
 */
type UntypedTagContent = Exclude<TagContent, TypeMetadata>

/**
 * Registry of nodes that can occur where {@linkcode TagContent} is expected.
 *
 * This interface can be augmented to register custom nodes.
 *
 * @example
 *  declare module '@flex-development/docast' {
 *    interface TagContentMap {
 *      custom: CustomNode
 *    }
 *  }
 *
 * @extends {PhrasingContentMap}
 * @extends {mdast.RootContentMap}
 */
interface TagContentMap extends PhrasingContentMap, mdast.RootContentMap {
  typeMetadata: TypeMetadata
}

export type { TagContent, TagContentMap, UntypedTagContent }
