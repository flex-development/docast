/**
 * @file Nodes - Description
 * @module docast/nodes/Description
 */

import type {
  Data,
  DescriptionContent,
  Parent
} from '@flex-development/docast'

/**
 * Info associated with comment descriptions.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface DescriptionData extends Data {}

/**
 * Text located at the **beginning** of a comment, before any block tags.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface Description extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode DescriptionContent}
   */
  children: DescriptionContent[]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode DescriptionData}
   */
  data?: DescriptionData | undefined

  /**
   * Node type.
   */
  type: 'description'
}

export type { Description as default, DescriptionData }
