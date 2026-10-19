/**
 * @file Type Tests - Closer
 * @module docast-compiler-types/tests/unit-d/Closer
 */

import type { Handle } from '@flex-development/docast-compiler-types'
import type * as mark from '@flex-development/mark/ast'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../closer.mts'

describe('unit-d:Closer', () => {
  it('should extend mark.Closer', () => {
    expectTypeOf<TestSubject>().toExtend<mark.Closer>()
  })

  it('should match [this: void]', () => {
    expectTypeOf<TestSubject>().thisParameter.toEqualTypeOf<void>()
  })

  describe('parameters', () => {
    it('should be callable with [(Handle<T> | null | undefined)?]', () => {
      expectTypeOf<TestSubject>()
        .parameters
        .toEqualTypeOf<[(Handle | null | undefined)?]>()
    })
  })

  describe('returns', () => {
    it('should return Handle<T>', () => {
      expectTypeOf<TestSubject>().returns.toEqualTypeOf<Handle>()
    })
  })
})
