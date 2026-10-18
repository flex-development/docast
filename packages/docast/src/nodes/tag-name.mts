/**
 * @file Nodes - TagName
 * @module docast/nodes/TagName
 */

import type { Data, Identifier, Parent } from '@flex-development/docast'

/**
 * Info associated with tag names.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface TagNameData extends Data {}

/**
 * A tag name.
 *
 * A tag name consists of an at-sign (`@`) followed by an identifier.
 *
 * Outside an inline tag, an at-sign may be immediately preceded by any
 * character besides a backslash (`\`) and left curly brace (`{`).
 * Inside an inline tag, the tag name must immediately follow the opening left
 * curly brace (e.g. `{@linkcode Parent}`).
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface TagName extends Parent {
  /**
   * The list of children.
   *
   * @see {@linkcode Identifier}
   *
   * @override
   */
  children: [identifier: Identifier]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode TagNameData}
   *
   * @override
   */
  data?: TagNameData | undefined

  /**
   * The node type.
   *
   * @override
   */
  type: 'tagName'
}

export type { TagName as default, TagNameData }
