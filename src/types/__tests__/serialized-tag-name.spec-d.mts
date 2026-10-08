/**
 * @file Type Tests - SerializedTagName
 * @module docast/types/tests/unit-d/SerializedTagName
 */

import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../serialized-tag-name.mts'

describe('unit-d:types/SerializedTagName', () => {
  it('should equal `@${Identifier}`', () => {
    // Arrange
    type Identifier = 'param' | 'return' | 'see'

    // Expect
    expectTypeOf<TestSubject<Identifier>>().toEqualTypeOf<`@${Identifier}`>()
  })
})
