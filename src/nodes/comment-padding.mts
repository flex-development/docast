/**
 * @file Nodes - CommentPadding
 * @module docast/nodes/CommentPadding
 */

import type { Data, Node } from '@flex-development/docast'

/**
 * Info associated with comment padding.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface CommentPaddingData extends Data {}

/**
 * Padding within a comment line prefix.
 *
 * @see {@linkcode Node}
 *
 * @extends {Node}
 */
interface CommentPadding extends Node {
  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode CommentPaddingData}
   *
   * @override
   */
  data?: CommentPaddingData | undefined

  /**
   * The node type.
   *
   * @override
   */
  type: 'commentPadding'
}

export type { CommentPaddingData, CommentPadding as default }
