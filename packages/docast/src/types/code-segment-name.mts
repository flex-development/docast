/**
 * @file Type Aliases - CodeSegmentName
 * @module docast/types/CodeSegmentName
 */

import type { CodeSegmentNameMap } from '@flex-development/docast'

/**
 * Union of registered source language AST node types.
 *
 * To register custom types, augment {@linkcode CodeSegmentNameMap}.\
 * They will be added to this union automatically.
 */
type CodeSegmentName = CodeSegmentNameMap[keyof CodeSegmentNameMap]

export type { CodeSegmentName as default }
