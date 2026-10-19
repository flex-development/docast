/**
 * @file Handles
 * @module docast-compiler-types/Handles
 */

import type { Handle } from '@flex-development/docast-compiler-types'
import type { TokenType } from '@flex-development/docmark-util-types'

/**
 * Record, where each key is a token type and each value is an event handler.
 *
 * @see {@linkcode Handle}
 * @see {@linkcode TokenType}
 */
type Handles = { [T in TokenType]?: Handle<T> | null | undefined }

export type { Handles as default }
