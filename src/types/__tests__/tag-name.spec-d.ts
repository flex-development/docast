/**
 * @file Type Tests - TagName
 * @module docast/types/tests/unit-d/TagName
 */

import type TestSubject from '../tag-name'

describe('unit-d:types/TagName', () => {
  it('should equal `@${T}`', () => {
    // Arrange
    type T = 'param' | 'return' | 'see'

    // Expect
    expectTypeOf<TestSubject<T>>().toEqualTypeOf<`@${T}`>()
  })
})
