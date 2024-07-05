/**
 * @file Nodes - ModifierList
 * @module docast/nodes/ModifierList
 */

import type { Data, Modifier, Parent } from '@flex-development/docast'

/**
 * Info associated with modifier lists.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface ModifierListData extends Data {}

/**
 * A modifier list.
 *
 * @example
 *  in out
 * @example
 *  get
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface ModifierList extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Modifier}
   */
  children:
    | [first: Modifier, ...middle: Modifier[], last: Modifier]
    | [first: Modifier]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode ModifierListData}
   */
  data?: ModifierListData | undefined

  /**
   * Node type.
   */
  type: 'modifierList'
}

export type { ModifierList as default, ModifierListData }
