/**
 * @file Type Tests - From
 * @module docast-compiler-types/tests/unit-d/From
 */

import type { Point } from '@flex-development/docmark-util-types'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../from.mts'

describe('unit-d:From', () => {
  it('should equal Omit<Point, "_bufferIndex" | "_index">', () => {
    // Arrange
    type Expect = Omit<Point, '_bufferIndex' | '_index'>

    // Expect
    expectTypeOf<TestSubject>().toEqualTypeOf<Expect>()
  })
})
