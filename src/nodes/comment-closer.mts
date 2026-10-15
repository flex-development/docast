/**
 * @file Nodes - CommentCloser
 * @module docast/nodes/CommentCloser
 */

import type { CommentMarkers, Data, Parent } from '@flex-development/docast'

/**
 * Info associated with comment closers.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface CommentCloserData extends Data {}

/**
 * A comment closer.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface CommentCloser extends Parent {
  /**
   * The list of children.
   *
   * @see {@linkcode CommentMarkers}
   *
   * @override
   */
  children: CommentMarkers

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode CommentCloserData}
   *
   * @override
   */
  data?: CommentCloserData | undefined

  /**
   * The node type.
   *
   * @override
   */
  type: 'commentCloser'
}

export type { CommentCloserData, CommentCloser as default }
