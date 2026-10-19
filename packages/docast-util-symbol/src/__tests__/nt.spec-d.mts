/**
 * @file Type Tests - nt
 * @module docast-util-symbol/tests/unit-d/nt
 */

import type { AnyNode } from '@flex-development/docast'
import type { ReadonlyKeys } from '@flex-development/tutils'
import { describe, expectTypeOf, it } from 'vitest'
import type testSubject from '../nt.mts'

describe('unit-d:nt', () => {
  type TestSubject = typeof testSubject

  it('should have all readonly keys', () => {
    expectTypeOf<keyof TestSubject>().toEqualTypeOf<ReadonlyKeys<TestSubject>>()
  })

  it('should map all node types', () => {
    // Arrange
    type Expect = AnyNode['type']

    // Expect
    expectTypeOf<Expect>().exclude<keyof TestSubject>().toEqualTypeOf<never>()
    expectTypeOf<keyof TestSubject>().toEqualTypeOf<Expect>()
  })
})
