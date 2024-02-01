/**
 * @file Interfaces - Data
 * @module docast/interfaces/Data
 */

import type unist from 'unist'

/**
 * Info associated with docast nodes.
 *
 * This space is guaranteed to never be specified by unist or docast, but it
 * can be used in utilities and plugins to store custom data.
 *
 * @example
 *  declare module '@flex-development/docast' {
 *    interface Data {
 *      // `node.data.id` is typed as `number | undefined`
 *      id?: number | undefined
 *    }
 *  }
 *
 * @extends {unist.Data}
 */
interface Data extends unist.Data {}

export type { Data as default }
