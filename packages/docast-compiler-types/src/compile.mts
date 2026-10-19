/**
 * @file Compile
 * @module docast-compiler-types/Compile
 */

import type { Root } from '@flex-development/docast'
import type { Event } from '@flex-development/docmark-util-types'

/**
 * Turn docmark events into a syntax tree.
 *
 * @see {@linkcode Event}
 * @see {@linkcode Root}
 *
 * @this {void}
 *
 * @param {Event[] | null | undefined} [events]
 *  The list of events
 * @return {Root}
 *  docast
 */
type Compile = (this: void, events?: Event[] | null | undefined) => Root

export type { Compile as default }
