/**
 * @file Nodes - Modifier
 * @module docast/nodes/Modifier
 */

import type { Literal, ModifierKeyword } from '@flex-development/docast'

/**
 * A modifier keyword.
 *
 * @see {@linkcode Literal}
 *
 * @extends {Literal}
 */
interface Modifier extends Literal {
  /**
   * Node type.
   */
  type: 'modifier'

  /**
   * The modifier keyword.
   *
   * @see {@linkcode ModifierKeyword}
   */
  value: ModifierKeyword
}

export type { Modifier as default }
