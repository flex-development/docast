/**
 * @file Nodes - ImplicitDescription
 * @module docast/nodes/ImplicitDescription
 */

import type { Type } from '#src/enums'
import type { Position } from '#src/interfaces'
import type unist from 'unist'
import type Parent from './parent'
import type InlineTag from './tag-inline'

/**
 * **ImplicitDescription** ([**Parent**][1]) represents a piece of text located
 * at the **beginning** of a docblock comment.
 *
 * **ImplicitDescription** can be used in [**comment**][2] nodes. It can contain
 * [**inline tag**][3] nodes.
 *
 * [1]: {@link ./parent.ts}
 * [2]: {@link ./comment.ts}
 * [3]: {@link ./tag-inline.ts}
 *
 * @template Data - Information from the ecosystem
 *
 * @extends {Parent<InlineTag,Data>}
 */
interface ImplicitDescription<Data extends unist.Data = unist.Data>
  extends Parent<InlineTag, Data> {
  /**
   * Location of node in source document.
   */
  position: Position

  /**
   * Node variant.
   */
  type: Type.IMPLICIT_DESCRIPTION

  /**
   * Description text parsed from [**comment**][1].
   *
   * **Note**: Values that span multiple lines should not include comment
   * delimiters.
   *
   * [1]: {@link ./comment.ts}
   */
  value: string
}

export type { ImplicitDescription as default }
