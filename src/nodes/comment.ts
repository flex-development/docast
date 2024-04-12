/**
 * @file Nodes - Comment
 * @module docast/nodes/Comment
 */

import type {
  CodeSegment,
  Data,
  Description,
  FlowContent,
  Parent
} from '@flex-development/docast'
import type { Nilable, Optional } from '@flex-development/tutils'

/**
 * Info associated with comments.
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
   * @see {@linkcode Description}
   * @see {@linkcode FlowContent}
   */
  children:
    | Exclude<FlowContent, Description>[]
    | [summary: Description, ...Exclude<FlowContent, Description>[]]

  /**
   * Code segment documented by comment.
   *
   * @see {@linkcode CodeSegment}
   */
  code?: Nilable<CodeSegment>

  /**
   * Info from the ecosystem.
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
