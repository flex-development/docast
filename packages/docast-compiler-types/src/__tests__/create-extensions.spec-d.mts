/**
 * @file Type Tests - CreateExtensions
 * @module docast-compiler-types/tests/unit-d/CreateExtensions
 */

import type {
  Buffer,
  Closer,
  Extension,
  Opener
} from '@flex-development/docast-compiler-types'
import type * as mark from '@flex-development/mark/ast'
import type { List } from '@flex-development/mark/core'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../create-extensions.mts'

describe('unit-d:CreateExtensions', () => {
  it('should extend mark.CreateExtensions', () => {
    expectTypeOf<TestSubject>().toExtend<mark.CreateExtensions>()
  })

  it('should match [this: void]', () => {
    expectTypeOf<TestSubject>().thisParameter.toEqualTypeOf<void>()
  })

  describe('parameters', () => {
    it('should be callable with [Opener, Closer, Buffer]', () => {
      expectTypeOf<TestSubject>()
        .parameters
        .toEqualTypeOf<[Opener, Closer, Buffer]>()
    })
  })

  describe('returns', () => {
    it('should return Extension | List<Extension | List<Extension>>', () => {
      expectTypeOf<TestSubject>()
        .returns
        .toEqualTypeOf<Extension | List<Extension | List<Extension>>>()
    })
  })
})
