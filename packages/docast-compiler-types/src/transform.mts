/**
 * @file Transform
 * @module docast-compiler-types/Transform
 */

import type { Root } from '@flex-development/docast'

/**
 * Transform the syntax `tree`.
 *
 * > 👉 **Note**: Returning `null`, `undefined`, or `void` will preserve `tree`.
 *
 * @see {@linkcode Root}
 *
 * @this {void}
 *
 * @param {Root} tree
 *  The tree to transform
 * @return {Root | null | undefined | void}
 *  The new or transformed tree, or nothing (in which case `tree` is used)
 */
type Transform = (this: void, tree: Root) => Root | null | undefined | void

export type { Transform as default }
