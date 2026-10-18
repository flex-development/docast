/**
 * @file Nodes - CommentLinePrefix
 * @module docast/nodes/CommentLinePrefix
 */

import type {
  CommentMarker,
  CommentMarkers,
  CommentPadding,
  Data,
  Parent
} from '@flex-development/docast'

/**
 * Info associated with comment line prefixes.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface CommentLinePrefixData extends Data {}

/**
 * A comment line prefix.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface CommentLinePrefix extends Parent {
  /**
   * The list of children.
   *
   * @see {@linkcode CommentMarker}
   * @see {@linkcode CommentPadding}
   *
   * @override
   */
  children:
    | CommentMarkers
    | [...markers: CommentMarkers, right: CommentPadding]
    | [left: CommentPadding, ...markers: CommentMarkers]
    | [left: CommentPadding, ...markers: CommentMarkers, right: CommentPadding]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode CommentLinePrefixData}
   *
   * @override
   */
  data?: CommentLinePrefixData | undefined

  /**
   * The node type.
   *
   * @override
   */
  type: 'commentLinePrefix'
}

export type { CommentLinePrefixData, CommentLinePrefix as default }
