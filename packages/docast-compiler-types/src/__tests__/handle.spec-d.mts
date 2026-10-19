/**
 * @file Type Tests - Handle
 * @module docast-compiler-types/tests/unit-d/Handle
 */

import type {
  CompileContext
} from '@flex-development/docast-compiler-types'
import type { Token } from '@flex-development/docmark-util-types'
import type * as mark from '@flex-development/mark/ast'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../handle.mts'

describe('unit-d:Handle', () => {
  it('should extend mark.Handle', () => {
    expectTypeOf<TestSubject>().toExtend<mark.Handle>()
  })

  it('should match [this: CompileContext]', () => {
    expectTypeOf<TestSubject>().thisParameter.toEqualTypeOf<CompileContext>()
  })

  describe('parameters', () => {
    it('should be callable with [Token<T>]', () => {
      expectTypeOf<TestSubject>().parameters.toEqualTypeOf<[Token]>()
    })
  })

  describe('returns', () => {
    it('should return undefined | void', () => {
      expectTypeOf<TestSubject>().returns.toEqualTypeOf<undefined | void>()
    })
  })
})
