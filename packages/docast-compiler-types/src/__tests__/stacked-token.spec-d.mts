/**
 * @file Type Tests - StackedToken
 * @module docast-compiler-types/tests/unit-d/StackedToken
 */

import type { OnEnterError } from '@flex-development/docast-compiler-types'
import type { Token } from '@flex-development/docmark-util-types'
import type * as mark from '@flex-development/mark/ast'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../stacked-token.mts'

describe('unit-d:StackedToken', () => {
  it('should extend mark.StackedToken', () => {
    expectTypeOf<TestSubject>().toExtend<mark.StackedToken>()
  })

  it('should match [0: Token]', () => {
    expectTypeOf<TestSubject>().toHaveProperty(0).toEqualTypeOf<Token>()
  })

  it('should match [1: OnEnterError | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty(1)
      .toEqualTypeOf<OnEnterError | undefined>()
  })

  it('should match [length: 2]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('length').toEqualTypeOf<2>()
  })
})
