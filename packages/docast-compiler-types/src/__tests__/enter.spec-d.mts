/**
 * @file Type Tests - Enter
 * @module docast-compiler-types/tests/unit-d/Enter
 */

import type {
  CompileContext,
  Node,
  OnEnterError
} from '@flex-development/docast-compiler-types'
import type { Token } from '@flex-development/docmark-util-types'
import type * as mark from '@flex-development/mark/ast'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../enter.mts'

describe('unit-d:Enter', () => {
  it('should extend mark.Enter', () => {
    expectTypeOf<TestSubject>().toExtend<mark.Enter>()
  })

  it('should match [this: CompileContext]', () => {
    expectTypeOf<TestSubject>().thisParameter.toEqualTypeOf<CompileContext>()
  })

  describe('parameters', () => {
    it('should be callable with [Node, Token, (OnEnterError | null | undefined)?]', () => {
      // Arrange
      type Expect = [Node, Token, (OnEnterError | null | undefined)?]

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
