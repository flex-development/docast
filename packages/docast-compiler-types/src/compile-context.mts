/**
 * @file CompileContext
 * @module docast-compiler-types/CompileContext
 */

import type {
  Buffer,
  CompileData,
  Compiler,
  Config,
  Enter,
  Exit,
  Node,
  Resume,
  StackedToken,
  Transform
} from '@flex-development/docast-compiler-types'
import type {
  Event,
  Point,
  Token,
  TokenizeContext
} from '@flex-development/docmark-util-types'

/**
 * The event compilation context.
 *
 * Event compilation consumes the {@linkcode Event}s of a parser to produce a
 * syntax tree.
 *
 * During compilation, event handlers orchestrate {@linkcode Node} creation,
 * {@linkcode enter} nodes onto the {@linkcode stack}, and {@linkcode exit}
 * them later.
 *
 * The compilation {@linkcode config} defines how {@linkcode Token} types map to
 * compilation behavior.
 * After the initial compilation, {@linkcode Transform}s can be applied to
 * manipulate the final tree.
 */
interface CompileContext {
  /**
   * Start capturing output into a temporary node.
   *
   * Captured nodes can be later serialized with {@linkcode resume}.
   *
   * @see {@linkcode Buffer}
   */
  buffer: Buffer

  /**
   * Turn parser events into a syntax tree.
   *
   * @see {@linkcode Compiler}
   */
  compile: Compiler

  /**
   * The compilation configuration.
   *
   * @see {@linkcode Config}
   */
  config: Config

  /**
   * Info passed around; key/value store.
   *
   * @see {@linkcode CompileData}
   */
  data: CompileData

  /**
   * Enter a node.
   *
   * @see {@linkcode Enter}
   */
  enter: Enter

  /**
   * Exit a node.
   *
   * @see {@linkcode Exit}
   */
  exit: Exit

  /**
   * The point before the first character in the content.
   *
   * @see {@linkcode Point}
   */
  from: Point

  /**
   * Stop {@linkcode buffer}ing and serialize the captured node.
   *
   * @see {@linkcode Resume}
   */
  resume: Resume

  /**
   * Get the string value of a token.
   *
   * @see {@linkcode TokenizeContext.sliceSerialize}
   */
  sliceSerialize: TokenizeContext['sliceSerialize']

  /**
   * The node stack.
   *
   * @see {@linkcode Node}
   */
  stack: Node[]

  /**
   * The token stack.
   *
   * @see {@linkcode StackedToken}
   */
  tokenStack: StackedToken[]
}

export type { CompileContext as default }
