/**
 * @file Extension
 * @module docast-compiler-types/Extension
 */

import type {
  Handle,
  Handles,
  Transform
} from '@flex-development/docast-compiler-types'

/**
 * A compiler extension.
 *
 * Compiler extensions can be used to change how tokens are turned into nodes,
 * as well as apply transformations to the final syntax tree.
 */
interface Extension {
  /**
   * The listener, or listeners, to call after a token is {@linkcode enter}ed.
   *
   * @see {@linkcode Handle}
   *
   * @override
   */
  afterEnter?: Handle | Handle[] | null | undefined

  /**
   * The listener, or listeners, to call after a token is {@linkcode exit}ed.
   *
   * @see {@linkcode Handle}
   *
   * @override
   */
  afterExit?: Handle | Handle[] | null | undefined

  /**
   * The listener, or listeners, to call before a token is {@linkcode enter}ed.
   *
   * @see {@linkcode Handle}
   *
   * @override
   */
  beforeEnter?: Handle | Handle[] | null | undefined

  /**
   * The listener, or listeners, to call before a token is {@linkcode exit}ed.
   *
   * @see {@linkcode Handle}
   *
   * @override
   */
  beforeExit?: Handle | Handle[] | null | undefined

  /**
   * The list of token types where line endings are used.
   *
   * @override
   */
  canContainEols?: string[] | undefined

  /**
   * Record, where each key is a token type
   * and each value is the handler to call when entering a token.
   *
   * @see {@linkcode Handles}
   *
   * @override
   */
  enter?: Handles | undefined

  /**
   * Record, where each key is a token type
   * and each value is the handler to call when exiting a token.
   *
   * @see {@linkcode Handles}
   *
   * @override
   */
  exit?: Handles | undefined

  /**
   * The list of tree transforms to apply.
   *
   * @see {@linkcode Transform}
   *
   * @override
   */
  transforms?: Transform[] | undefined
}

export type { Extension as default }
