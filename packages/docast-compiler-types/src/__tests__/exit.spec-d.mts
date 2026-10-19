/**
 * @file Type Tests - Exit
 * @module docast-compiler-types/tests/unit-d/Exit
 */

import type {
  CompileContext,
  OnExitError
} from '@flex-development/docast-compiler-types'
import type { Token } from '@flex-development/docmark-util-types'
import type * as mark from '@flex-development/mark/ast'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../exit.mts'

describe('unit-d:Exit', () => {
  it('should extend mark.Exit', () => {
    expectTypeOf<TestSubject>().toExtend<mark.Exit>()
  })

  it('should match [this: CompileContext]', () => {
    expectTypeOf<TestSubject>().thisParameter.toEqualTypeOf<CompileContext>()
  })

  describe('parameters', () => {
    it('should be callable with [Token, (OnExitError | null | undefined)?]', () => {
      // Arrange
      type Expect = [Token, (OnExitError | null | undefined)?]

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
