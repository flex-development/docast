/**
 * @file Type Aliases - AnyNode
 * @module docast/types/AnyNode
 */

import type { Root } from '@flex-development/docast'
import type { InclusiveDescendant } from '@flex-development/unist-util-types'

/**
 * Union of nodes that can occur in docast.
 */
type AnyNode = InclusiveDescendant<Root>

export type { AnyNode as default }
