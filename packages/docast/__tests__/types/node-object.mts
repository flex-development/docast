/**
 * @file Test Types - NodeObject
 * @module tests/types/NodeObject
 */

import type { Node } from 'unist'

/**
 * Create an object mapping a node type to a node.
 *
 * @template {Node} T
 *  The node to map
 */
type NodeObject<T extends Node> = { [K in T['type']]: T }

export type { NodeObject as default }
