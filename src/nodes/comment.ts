/**
 * @file Nodes - Comment
 * @module docast/nodes/Comment
 */

import type { FlowContent } from '#src/content'
import type { CodeSegment, Data } from '#src/interfaces'
import type { Nilable, Optional } from '@flex-development/tutils'
import type Parent from './parent'

/**
 * Info associated with comment nodes.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface CommentData extends Data {}

/**
 * A specially formatted [comment][1] within a source file that is used to
 * document a particular segment of code. These kinds of comments are also
 * known as docblock comments.
 *
 * [1]: https://en.wikipedia.org/wiki/Comment_(computer_programming)
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface Comment extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode FlowContent}
   */
  children: FlowContent[]

  /**
   * Code segment documented by comment.
   *
   * @see {@linkcode CodeSegment}
   */
  code?: Nilable<CodeSegment>

  /**
   * Data associated with comment.
   *
   * @see {@linkcode CommentData}
   */
  data?: Optional<CommentData>

  /**
   * Node type.
   */
  type: 'comment'
}

export type { CommentData, Comment as default }
