/**
 * @file Type Tests - Buffer
 * @module docast-compiler-types/tests/unit-d/Buffer
 */

import type {
  CompileContext
} from '@flex-development/docast-compiler-types'
import type * as mark from '@flex-development/mark/ast'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../buffer.mts'

describe('unit-d:Buffer', () => {
  it('should extend mark.Buffer', () => {
    expectTypeOf<TestSubject>().toExtend<mark.Buffer>()
  })

  it('should match [this: void]', () => {
    expectTypeOf<TestSubject>().thisParameter.toEqualTypeOf<CompileContext>()
  })

  describe('parameters', () => {
    it('should be callable with []', () => {
      expectTypeOf<TestSubject>().parameters.toEqualTypeOf<[]>()
    })
  })

  describe('returns', () => {
    it('should return undefined', () => {
      expectTypeOf<TestSubject>().returns.toEqualTypeOf<undefined>()
    })
  })
})
