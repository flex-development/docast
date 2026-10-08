/**
 * @file Nodes - CodeSegment
 * @module docast/nodes/CodeSegment
 */

import type {
  CodeSegmentName,
  Comment,
  Data,
  Parent
} from '@flex-development/docast'

/**
 * Info associated with code segments.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface CodeSegmentData extends Data {}

/**
 * An abstract representation of a source language AST (or CST) node that a
 * comment documents.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface CodeSegment extends Parent {
  /**
   * The list of children.
   *
   * @see {@linkcode Comment}
   *
   * @override
   */
  children: [CodeSegment | Comment, ...(CodeSegment | Comment)[]]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode CodeSegmentData}
   *
   * @override
   */
  data?: CodeSegmentData | undefined

  /**
   * The source language AST node type.
   *
   * @see {@linkcode CodeSegmentName}
   */
  name?: CodeSegmentName extends never ? string : CodeSegmentName | undefined

  /**
   * The node type.
   *
   * @override
   */
  type: 'codeSegment'
}

export type { CodeSegmentData, CodeSegment as default }
