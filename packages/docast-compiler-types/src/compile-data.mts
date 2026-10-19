/**
 * @file CompileData
 * @module docast-compiler-types/CompileData
 */

/**
 * Registry of tracked data.
 *
 * This interface can be augmented to register custom data.
 *
 * @example
 *  declare module '@flex-development/docast-compiler-types' {
 *    interface CompileData {
 *      mathFlowInside?: boolean | undefined
 *    }
 *  }
 */
interface CompileData {}

export type { CompileData as default }
