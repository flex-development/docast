/**
 * @file Interfaces - CommentMarkerMap
 * @module docast/interfaces/CommentMarkerMap
 */

/**
 * Registry of serialized comment markers.
 *
 * @example
 *  declare module '@flex-development/docast' {
 *    interface CommentMarkerMap {
 *      sass: '*' | '/' | ' '
 *    }
 *  }
 */
interface CommentMarkerMap {}

export type { CommentMarkerMap as default }
