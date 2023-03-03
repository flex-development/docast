/**
 * @file Type Definitions - ParentType
 * @module docast/types/ParentType
 */

import type { Type } from '#src/enums'

/**
 * **Parent** ([**UnistParent**][1]) node types.
 *
 * [1]: https://github.com/syntax-tree/unist#parent
 */
type ParentType =
  | Type.BLOCK_TAG
  | Type.COMMENT
  | Type.IMPLICIT_DESCRIPTION
  | Type.ROOT

export type { ParentType as default }
