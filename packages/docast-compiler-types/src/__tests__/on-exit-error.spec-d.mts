/**
 * @file Type Tests - OnExitError
 * @module docast-compiler-types/tests/unit-d/OnExitError
 */

import type {
  CompileContext
} from '@flex-development/docast-compiler-types'
import type { Token } from '@flex-development/docmark-util-types'
import type * as mark from '@flex-development/mark/ast'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../on-exit-error.mts'

describe('unit-d:OnExitError', () => {
  it('should extend mark.OnExitError', () => {
    expectTypeOf<TestSubject>().toExtend<mark.OnExitError>()
  })

  it('should match [this: CompileContext]', () => {
    expectTypeOf<TestSubject>().thisParameter.toEqualTypeOf<CompileContext>()
  })

  describe('parameters', () => {
    it('should be callable with [Token<L>, Token<R>]', () => {
      expectTypeOf<TestSubject>().parameters.toEqualTypeOf<[Token, Token]>()
    })
  })

  describe('returns', () => {
    it('should return undefined', () => {
      expectTypeOf<TestSubject>().returns.toEqualTypeOf<undefined>()
    })
  })
})
