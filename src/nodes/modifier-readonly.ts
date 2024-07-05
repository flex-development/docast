/**
 * @file Nodes - ReadonlyModifier
 * @module docast/nodes/ReadonlyModifier
 */

import type { Modifier } from '@flex-development/docast'

/**
 * The `readonly` modifier.
 *
 * @see {@linkcode Modifier}
 *
 * @extends {Modifier}
 */
interface ReadonlyModifier extends Modifier {
  /**
   * The modifier keyword.
   */
  value: 'readonly'
}

export type { ReadonlyModifier as default }
