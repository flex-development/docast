/**
 * @file Type Tests - CompileContext
 * @module docast-compiler-types/tests/unit-d/CompileContext
 */

import type {
  Buffer,
  CompileData,
  Config,
  Enter,
  Exit,
  Node,
  Resume,
  StackedToken
} from '@flex-development/docast-compiler-types'
import type {
  Point,
  TokenizeContext
} from '@flex-development/docmark-util-types'
import type * as mark from '@flex-development/mark/ast'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../compile-context.mts'

describe('unit-d:CompileContext', () => {
  it('should extend mark.CompileContext', () => {
    expectTypeOf<TestSubject>().toExtend<mark.CompileContext>()
  })

  it('should match [buffer: Buffer]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('buffer')
      .toEqualTypeOf<Buffer>()
  })

  it('should match [config: Config]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('config')
      .toEqualTypeOf<Config>()
  })

  it('should match [data: CompileData]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('data')
      .toEqualTypeOf<CompileData>()
  })

  it('should match [enter: Enter]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('enter')
      .toEqualTypeOf<Enter>()
  })

  it('should match [exit: Exit]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('exit')
      .toEqualTypeOf<Exit>()
  })

  it('should match [from: Point]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('from')
      .toEqualTypeOf<Point>()
  })

  it('should match [resume: Resume]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('resume')
      .toEqualTypeOf<Resume>()
  })

  it('should match [sliceSerialize: TokenizeContext["sliceSerialize"]]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('sliceSerialize')
      .toEqualTypeOf<TokenizeContext['sliceSerialize']>()
  })

  it('should match [stack: Node[]]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('stack')
      .toEqualTypeOf<Node[]>()
  })

  it('should match [tokenStack: StackedToken[]]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('tokenStack')
      .toEqualTypeOf<StackedToken[]>()
  })
})
