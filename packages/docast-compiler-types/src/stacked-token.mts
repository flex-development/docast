/**
 * @file StackedToken
 * @module docast-compiler-types/StackedToken
 */

import type { OnEnterError } from '@flex-development/docast-compiler-types'
import type { Token } from '@flex-development/docmark-util-types'

/**
 * List containing an open token on the stack,
 * and an optional error handler to use if the token isn't closed properly.
 *
 * @see {@linkcode OnEnterError}
 * @see {@linkcode Token}
 */
type StackedToken = [token: Token, handler: OnEnterError | undefined]

export type { StackedToken as default }
