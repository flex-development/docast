import type * as docmark from '@flex-development/docmark-util-types'
import type {} from '@flex-development/mark/parse'

declare module '@flex-development/mark/parse' {
  interface ContextMap {
    docmark: docmark.TokenizeContext
  }

  interface TokenFields extends docmark.TokenFields {}

  interface TokenTypeMap extends docmark.TokenTypeMap {}
}
