/**
 * @file Type Tests - Tag
 * @module docast/mixins/tests/unit-d/Tag
 */

import type TestSubject from '../tag'

describe('unit-d:mixins/Tag', () => {
  it('should match [name: string]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('name').toBeString()
  })

  it('should match [tag: string]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('tag').toBeString()
  })
})
