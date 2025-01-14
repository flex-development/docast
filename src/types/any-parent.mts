/**
 * @file Type Aliases - AnyParent
 * @module docast/types/AnyParent
 */

import type { Root } from '@flex-development/docast'
import type { Parents } from '@flex-development/unist-util-types'

/**
 * Union of [*parents*][1] that are [*inclusive descendants*][2] of
 * {@linkcode Root}.
 *
 * [1]: https://github.com/syntax-tree/unist#parent
 * [2]: https://github.com/syntax-tree/unist#descendant
 */
type AnyParent = Parents<Root>

export type { AnyParent as default }
