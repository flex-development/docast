/**
 * @file Type Tests - Resume
 * @module docast-compiler-types/tests/unit-d/Resume
 */

import type {
  CompileContext
} from '@flex-development/docast-compiler-types'
import type * as mark from '@flex-development/mark/ast'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../resume.mts'

describe('unit-d:Resume', () => {
  it('should extend mark.Resume', () => {
    expectTypeOf<TestSubject>().toExtend<mark.Resume>()
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
    it('should return string', () => {
      expectTypeOf<TestSubject>().returns.toEqualTypeOf<string>()
    })
  })
})
