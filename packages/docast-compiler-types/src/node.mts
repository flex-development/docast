/**
 * @file Node
 * @module docast-compiler-types/Node
 */

import type { NodeMap } from '@flex-development/docast-compiler-types'

/**
 * Union of registered nodes that can be created during event compilation.
 *
 * To register custom nodes, augment {@linkcode NodeMap}.\
 * They will be added to this union automatically.
 */
type Node = NodeMap[keyof NodeMap]

export type { Node as default }
