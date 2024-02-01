/**
 * @file Nodes - Description
 * @module docast/nodes/Description
 */

import type { DescriptionContent } from '#src/content'
import type { Data } from '#src/interfaces'
import type { Optional } from '@flex-development/tutils'
import type Parent from './parent'

/**
 * Info associated with implicit description nodes.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface DescriptionData extends Data {}

/**
 * A piece of text located at the **beginning** of a docblock comment.
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
   * Data associated with implicit description.
   *
   * @see {@linkcode DescriptionData}
   */
  data?: Optional<DescriptionData>

  /**
   * Node type.
   */
  type: 'description'
}

export type { DescriptionData, Description as default }
