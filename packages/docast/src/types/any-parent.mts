/**
 * @file Type Aliases - AnyParent
 * @module docast/types/AnyParent
 */

import type { Root } from '@flex-development/docast'
import type { Parents } from '@flex-development/unist-util-types'

/**
 * Union of [*parents*][parent] that are [*inclusive descendants*][descendant]
 * of {@linkcode Root}.
 *
 * [descendant]: https://github.com/syntax-tree/unist#descendant
 * [parent]: https://github.com/syntax-tree/unist#parent
 */
type AnyParent = Parents<Root>

export type { AnyParent as default }
