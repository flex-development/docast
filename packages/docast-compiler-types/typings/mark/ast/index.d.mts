import type { PhrasingContent } from '@flex-development/docast'
import type * as compiler from '@flex-development/docast-compiler-types'
import type {} from '@flex-development/mark/ast'

declare module '@flex-development/mark/ast' {
  interface ContextMap {
    docast: compiler.CompileContext
  }

  interface Extension {
    canContainEols?: string[] | undefined
  }

  interface FragmentChildMap {
    docast: PhrasingContent
  }

  interface NodeMap extends compiler.NodeMap {
    fragment: compiler.Fragment
  }
}
