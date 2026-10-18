/**
 * @file Type Aliases - CommentMarkers
 * @module docast/types/CommentMarkers
 */

import type { CommentMarker } from '@flex-development/docast'

/**
 * A list of {@linkcode CommentMarker} [*child*][child] nodes.
 *
 * At least one child is required.
 *
 * [child]: https://github.com/syntax-tree/unist#child
 */
type CommentMarkers = [marker: CommentMarker, ...markers: CommentMarker[]]

export type { CommentMarkers as default }
