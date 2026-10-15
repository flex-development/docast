/**
 * @file Type Tests - SerializedMarker
 * @module docast/types/tests/unit-d/SerializedMarker
 */

import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../serialized-marker.mts'

describe('unit-d:types/SerializedMarker', () => {
  it('should equal string', () => {
    expectTypeOf<TestSubject>().toEqualTypeOf<string>()
  })
})
