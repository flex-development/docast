/**
 * @file Type Tests - Handles
 * @module docast-compiler-types/tests/unit-d/Handles
 */

import type { Handle } from '@flex-development/docast-compiler-types'
import type { TokenType } from '@flex-development/docmark-util-types'
import type * as mark from '@flex-development/mark/ast'
import type { Nilable, OptionalKeys } from '@flex-development/tutils'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../handles.mts'

describe('unit-d:Handles', () => {
  it('should extend Partial<Record<TokenType, Handle<any> | null | undefined>>', () => {
    // Arrange
    type Expect = Partial<Record<TokenType, Nilable<Handle<any>>>>

    // Expect
    expectTypeOf<TestSubject>().toExtend<Expect>()
  })

  it('should extend mark.Handles', () => {
    expectTypeOf<TestSubject>().toExtend<mark.Handles>()
  })

  it('should have all optional keys', () => {
    expectTypeOf<keyof TestSubject>().toEqualTypeOf<OptionalKeys<TestSubject>>()
  })
})
