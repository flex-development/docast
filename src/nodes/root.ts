/**
 * @file Nodes - Root
 * @module docast/nodes/Root
 */

import type { Type } from '#src/enums'
import type unist from 'unist'
import type Comment from './comment'
import type Parent from './parent'

/**
 * **Root** ([**Parent**][1]) represents a document.
 *
 * **Root** can be used as the [*root*][2] of a [*tree*][3], never as a
 * [*child*][4]. It can contain [**comment**][5] nodes.
 *
 * [1]: {@link ./parent.ts}
 * [2]: https://github.com/syntax-tree/unist#root
 * [3]: https://github.com/syntax-tree/unist#tree
 * [4]: https://github.com/syntax-tree/unist#child
 * [5]: {@link ./comment.ts}
 *
 * @template Data - Information from the ecosystem
 *
 * @extends {Parent<Comment,Data>}
 */
interface Root<Data extends unist.Data = unist.Data>
  extends Parent<Comment, Data> {
  position?: never
  type: Type.ROOT
}

export type { Root as default }
