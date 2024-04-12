/**
 * @file Type Tests - Tag
 * @module docast/mixins/tests/unit-d/Tag
 */

import type { TagName } from '@flex-development/docast'
import type TestSubject from '../tag'

describe('unit-d:mixins/Tag', () => {
  it('should match [name: TagName]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('name').toEqualTypeOf<TagName>()
  })
})
