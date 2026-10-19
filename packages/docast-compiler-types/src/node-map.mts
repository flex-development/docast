/**
 * @file NodeMap
 * @module docast-compiler-types/NodeMap
 */

import type {
  CommentCloser,
  CommentContentMap,
  CommentMarker,
  CommentOpener,
  CommentPadding,
  Identifier,
  Root,
  RootContentMap
} from '@flex-development/docast'
import type { Fragment } from '@flex-development/docast-compiler-types'

/**
 * Registry of nodes that can be created during event compilation.
 *
 * This interface can be augmented to register custom nodes.
 *
 * @see {@linkcode CommentContentMap}
 * @see {@linkcode RootContentMap}
 *
 * @example
 *  declare module '@flex-development/docast-compiler-types' {
 *    interface NodeMap {
 *      tag: docast.Tag
 *    }
 *  }
 *
 * @extends {CommentContentMap}
 * @extends {RootContentMap}
 */
interface NodeMap extends CommentContentMap, RootContentMap {
  commentCloser: CommentCloser
  commentMarker: CommentMarker
  commentOpener: CommentOpener
  commentPadding: CommentPadding
  fragment: Fragment
  identifier: Identifier
  root: Root
}

export type { NodeMap as default }
