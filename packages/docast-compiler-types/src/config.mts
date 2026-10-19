/**
 * @file Config
 * @module docast-compiler-types/Config
 */

import type {
  Extension,
  Handle,
  Handles,
  Transform
} from '@flex-development/docast-compiler-types'
import type { TokenType } from '@flex-development/docmark-util-types'

/**
 * The event compilation configuration.
 *
 * @see {@linkcode Extension}
 *
 * @extends {Extension}
 */
interface Config extends Extension {
  /**
   * The list of listeners to call after a token is {@linkcode enter}ed.
   *
   * @see {@linkcode Handle}
   *
   * @override
   */
  afterEnter: Handle[]

  /**
   * The list of listeners to call after a token is {@linkcode exit}ed.
   *
   * @see {@linkcode Handle}
   *
   * @override
   */
  afterExit: Handle[]

  /**
   * The list of listeners to call before a token is {@linkcode enter}ed.
   *
   * @see {@linkcode Handle}
   *
   * @override
   */
  beforeEnter: Handle[]

  /**
   * The list of listeners to call before a token is {@linkcode exit}ed.
   *
   * @see {@linkcode Handle}
   *
   * @override
   */
  beforeExit: Handle[]

  /**
   * The list of token types where line endings are used.
   *
   * @override
   */
  canContainEols: string[]

  /**
   * Record, where each key is a {@linkcode TokenType}
   * and each value is the handler to call when entering a token.
   *
   * @see {@linkcode Handles}
   *
   * @override
   */
  enter: Handles

  /**
   * Record, where each key is a {@linkcode TokenType}
   * and each value is the handler to call when exiting a token.
   *
   * @see {@linkcode Handles}
   *
   * @override
   */
  exit: Handles

  /**
   * The list of tree transforms to apply.
   *
   * @see {@linkcode Transform}
   *
   * @override
   */
  transforms: Transform[]
}

export type { Config as default }
