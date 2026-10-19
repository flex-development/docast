/**
 * @file Type Tests - OnEnterError
 * @module docast-compiler-types/tests/unit-d/OnEnterError
 */

import type {
  CompileContext
} from '@flex-development/docast-compiler-types'
import type { Token } from '@flex-development/docmark-util-types'
import type * as mark from '@flex-development/mark/ast'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../on-enter-error.mts'

describe('unit-d:OnEnterError', () => {
  it('should extend mark.OnEnterError', () => {
    expectTypeOf<TestSubject>().toExtend<mark.OnEnterError>()
  })

  it('should match [this: CompileContext]', () => {
    expectTypeOf<TestSubject>().thisParameter.toEqualTypeOf<CompileContext>()
  })

  describe('parameters', () => {
    it('should be callable with [Token<L> | undefined, Token<R>]', () => {
      // Arrange
      type Expect = [Token | undefined, Token]

      // Expect
      expectTypeOf<TestSubject>().parameters.toEqualTypeOf<Expect>()
    })
  })

  describe('returns', () => {
    it('should return undefined', () => {
      expectTypeOf<TestSubject>().returns.toEqualTypeOf<undefined>()
    })
  })
})
