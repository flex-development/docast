/**
 * @file Nodes - CommentOpener
 * @module docast/nodes/CommentOpener
 */

import type { CommentMarkers, Data, Parent } from '@flex-development/docast'

/**
 * Info associated with comment openers.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface CommentOpenerData extends Data {}

/**
 * A comment opener.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface CommentOpener extends Parent {
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
   * @see {@linkcode CommentOpenerData}
   *
   * @override
   */
  data?: CommentOpenerData | undefined

  /**
   * The node type.
   *
   * @override
   */
  type: 'commentOpener'
}

export type { CommentOpenerData, CommentOpener as default }
