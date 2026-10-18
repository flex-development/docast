/**
 * @file Nodes - Comment
 * @module docast/nodes/Comment
 */

import type {
  CommentCloser,
  CommentContent,
  CommentOpener,
  Data,
  Parent
} from '@flex-development/docast'
import type { CommentKind } from '@flex-development/docmark-util-types'

/**
 * Info associated with comments.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface CommentData extends Data {
  /**
   * Whether indented syntax was detected.
   */
  indented?: boolean | null | undefined

  /**
   * Whether the comment was deemed a documentation comment by the surrounding
   * source language.
   */
  info?: boolean | null | undefined
}

/**
 * A [comment][] in the source content.
 *
 * [comment]: https://en.wikipedia.org/wiki/Comment_(computer_programming)
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface Comment extends Parent {
  /**
   * The list of children.
   *
   * @see {@linkcode CommentCloser}
   * @see {@linkcode CommentContent}
   * @see {@linkcode CommentOpener}
   *
   * @override
   */
  children:
    | [open: CommentOpener, ...content: CommentContent[]]
    | [open: CommentOpener, ...content: CommentContent[], close: CommentCloser]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode CommentData}
   *
   * @override
   */
  data?: CommentData | undefined

  /**
   * The comment kind.
   *
   * @see {@linkcode CommentKind}
   */
  kind: CommentKind

  /**
   * The node type.
   *
   * @override
   */
  type: 'comment'
}

export type { CommentData, Comment as default }
