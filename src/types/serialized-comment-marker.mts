/**
 * @file Type Aliases - SerializedCommentMarker
 * @module docast/types/SerializedCommentMarker
 */

import type { CommentMarkerMap } from '@flex-development/docast'

/**
 * Union of registered serialized comment markers.
 *
 * To register custom markers, augment {@linkcode CommentMarkerMap}.\
 * They will be added to this union automatically.
 */
type SerializedCommentMarker = CommentMarkerMap[keyof CommentMarkerMap]

export type { SerializedCommentMarker as default }
