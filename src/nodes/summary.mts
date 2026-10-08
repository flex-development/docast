/**
 * @file Nodes - Summary
 * @module docast/nodes/Summary
 */

import type { Data, Parent, SummaryContent } from '@flex-development/docast'

/**
 * Info associated with comment summaries.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface SummaryData extends Data {}

/**
 * Text located at the **beginning** of a comment, before any other syntax.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface Summary extends Parent {
  /**
   * The list of children.
   *
   * @see {@linkcode SummaryContent}
   *
   * @override
   */
  children: SummaryContent[]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode SummaryData}
   *
   * @override
   */
  data?: SummaryData | undefined

  /**
   * The node type.
   *
   * @override
   */
  type: 'summary'
}

export type { Summary as default, SummaryData }
