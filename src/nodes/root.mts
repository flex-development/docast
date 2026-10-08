/**
 * @file Nodes - Root
 * @module docast/nodes/Root
 */

import type { Data, Parent, RootContent } from '@flex-development/docast'

/**
 * Info associated with documentation fragments and roots.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface RootData extends Data {}

/**
 * A documentation fragment or an entire documented file.
 *
 * A documented file, also known as a documentation root, is any source file
 * containing comments.\
 * In docast, all comments are considered documentation, with `info` comments
 * being those identified as documentation by the surrounding source language.\
 * Parser extensions and other tools can be used to differentiate between `info`
 * comments and their counterpart, petty comments.
 *
 * > 👉 **Note**: Should be used as the root of a [*tree*][tree].\
 * > Must not be used as a [*child*][child].
 *
 * [child]: https://github.com/syntax-tree/unist#child
 * [tree]: https://github.com/syntax-tree/unist#tree
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface Root extends Parent {
  /**
   * The list of children.
   *
   * @see {@linkcode RootContent}
   *
   * @override
   */
  children: RootContent[]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode RootData}
   *
   * @override
   */
  data?: RootData | undefined

  /**
   * The node type.
   *
   * @override
   */
  type: 'root'
}

export type { Root as default, RootData }
