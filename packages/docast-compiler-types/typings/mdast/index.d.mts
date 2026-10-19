import type * as mdast from '@flex-development/mdast-util-from-markdown'

declare module '@flex-development/docast-compiler-types' {
  interface CompileData extends mdast.CompileData {}
}
