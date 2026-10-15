/**
 * @file Nodes - CommentMarker
 * @module docast/nodes/CommentMarker
 */

import type {
  Data,
  Literal,
  SerializedCommentMarker,
  SerializedMarker
} from '@flex-development/docast'

/**
 * Info associated with comment markers.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface CommentMarkerData extends Data {}

/**
 * A comment marker.
 *
 * @see {@linkcode Literal}
 *
 * @extends {Literal}
 */
interface CommentMarker extends Literal {
  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode CommentMarkerData}
   *
   * @override
   */
  data?: CommentMarkerData | undefined

  /**
   * The node type.
   *
   * @override
   */
  type: 'commentMarker'

  /**
   * The serialized marker.
   *
   * @see {@linkcode SerializedCommentMarker}
   * @see {@linkcode SerializedMarker}
   *
   * @override
   */
  value: SerializedCommentMarker extends never // dprint-ignore-start
    ? SerializedMarker
    : SerializedCommentMarker // dprint-ignore-end
}

export type { CommentMarkerData, CommentMarker as default }
