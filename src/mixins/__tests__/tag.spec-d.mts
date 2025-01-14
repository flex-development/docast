/**
 * @file Type Tests - Tag
 * @module docast/mixins/tests/unit-d/Tag
 */

import type TestSubject from '#mixins/tag'
import type { TagName } from '@flex-development/docast'

describe('unit-d:mixins/Tag', () => {
  it('should match [name: TagName]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('name').toEqualTypeOf<TagName>()
  })
})
