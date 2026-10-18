/**
 * @file Content - summary
 * @module docast/content/summary
 */

import type { PhrasingContentMap } from '@flex-development/docast'
import type mdast from 'mdast'

/**
 * Union of registered docast nodes that can occur where summary content
 * is expected.
 *
 * To register custom docast nodes, augment {@linkcode SummaryContentMap}.\
 * They will be added to this union automatically.
 */
type SummaryContent = SummaryContentMap[keyof SummaryContentMap]

/**
 * Registry of docast nodes that can occur where {@linkcode SummaryContent}
 * is expected.
 *
 * This interface can be augmented to register custom nodes.
 *
 * @example
 *  declare module '@flex-development/docast' {
 *    interface SummaryContentMap {
 *      custom: CustomNode
 *    }
 *  }
 *
 * @extends {PhrasingContentMap}
 * @extends {mdast.RootContentMap}
 */
interface SummaryContentMap extends PhrasingContentMap, mdast.RootContentMap {}

export type { SummaryContent, SummaryContentMap }
