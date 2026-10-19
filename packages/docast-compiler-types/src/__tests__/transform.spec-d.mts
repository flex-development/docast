/**
 * @file Type Tests - Transform
 * @module docast-compiler-types/tests/unit-d/Transform
 */

import type { Root } from '@flex-development/docast'
import type * as mark from '@flex-development/mark/ast'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../transform.mts'

describe('unit-d:Transform', () => {
  it('should extend mark.Transform', () => {
    expectTypeOf<TestSubject>().toExtend<mark.Transform>()
  })

  it('should match [this: void]', () => {
    expectTypeOf<TestSubject>().thisParameter.toEqualTypeOf<void>()
  })

  describe('parameters', () => {
    it('should be callable with [Root]', () => {
      expectTypeOf<TestSubject>().parameters.toEqualTypeOf<[Root]>()
    })
  })

  describe('return', () => {
    it('should return Root | null | undefined | void', () => {
      // Arrange
      type Expect = Root | null | undefined | void

      // Expect
      expectTypeOf<TestSubject>().returns.toEqualTypeOf<Expect>()
    })
  })
})
