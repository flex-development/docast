/**
 * @file Type Tests - CodeSegmentName
 * @module docast/types/tests/unit-d/CodeSegmentName
 */

import type { CodeSegmentNameMap } from '@flex-development/docast'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../code-segment-name.mts'

describe('unit-d:types/CodeSegmentName', () => {
  it('should equal CodeSegmentNameMap[keyof CodeSegmentNameMap]', () => {
    // Arrange
    type Expect = CodeSegmentNameMap[keyof CodeSegmentNameMap]

    // Expect
    expectTypeOf<TestSubject>().toEqualTypeOf<Expect>()
  })
})
