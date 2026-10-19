/**
 * @file Type Tests - Compile
 * @module docast-compiler-types/tests/unit-d/Compile
 */

import type { Root } from '@flex-development/docast'
import type { Event } from '@flex-development/docmark-util-types'
import type * as mark from '@flex-development/mark/ast'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../compile.mts'

describe('unit-d:Compile', () => {
  it('should extend mark.Compile', () => {
    expectTypeOf<TestSubject>().toExtend<mark.Compile>()
  })

  it('should match [this: void]', () => {
    expectTypeOf<TestSubject>().thisParameter.toEqualTypeOf<void>()
  })

  describe('parameters', () => {
    it('should be callable with [(Event[] | null | undefined)?]', () => {
      expectTypeOf<TestSubject>()
        .parameters
        .toEqualTypeOf<[(Event[] | null | undefined)?]>()
    })
  })

  describe('return', () => {
    it('should return Root', () => {
      expectTypeOf<TestSubject>().returns.toEqualTypeOf<Root>()
    })
  })
})
