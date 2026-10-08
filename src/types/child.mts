/**
 * @file Type Aliases - Child
 * @module docast/types/Child
 */

import type { AnyParent } from '@flex-development/docast'
import type { Children } from '@flex-development/unist-util-types'

/**
 * Union of [*child*][child] nodes.
 *
 * [child]: https://github.com/syntax-tree/unist#child
 */
type Child = Children<AnyParent>[number]

export type { Child as default }
