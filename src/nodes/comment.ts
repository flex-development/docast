/**
 * @file Nodes - Comment
 * @module docast/nodes/Comment
 */

import type { Type } from '#src/enums'
import type { Context, Position } from '#src/interfaces'
import type { Nullable } from '@flex-development/tutils'
import type unist from 'unist'
import type ImplicitDescription from './implicit-description'
import type Parent from './parent'
import type BlockTag from './tag-block'

/**
 * **Comment** ([**Parent**][1]) represents a specially formatted [comment][2]
 * within a source file that is used to document a particular segment of code.
 * These kinds of comments are also known as docblock comments.
 *
 * **Comment** can be used in [**root**][3] nodes. It can contain [**implicit
 * description**][4] and [**block tag**][5] nodes.
 *
 * A **Comment** has *context* if [positioned][6] exactly one line before the
 * code it documents.
 *
 * [1]: {@link ./parent.ts}
 * [2]: https://en.wikipedia.org/wiki/Comment_(computer_programming)
 * [3]: {@link ./root.ts}
 * [4]: {@link ./implicit-description.ts}
 * [5]: {@link ./tag-block.ts}
 * [6]: https://github.com/syntax-tree/unist#positional-information
 *
 * @template Data - Information from the ecosystem
 *
 * @extends {Parent<BlockTag|ImplicitDescription,Data>}
 */
interface Comment<Data extends unist.Data = unist.Data>
  extends Parent<BlockTag | ImplicitDescription, Data> {
  /**
   * Data representing the segment of code a comment is for.
   *
   * @see [`Context`]({@link ../interfaces/context.ts})
   */
  context: Nullable<Context>

  /**
   * Location of node in source document.
   */
  position: Position

  /**
   * Node variant.
   */
  type: Type.COMMENT

  /**
   * Docblock comment parsed from source document.
   */
  value: string
}

export type { Comment as default }
