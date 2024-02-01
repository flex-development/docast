/**
 * @file Type Tests - Root
 * @module docast/nodes/tests/unit-d/Root
 */

import type { Optional } from '@flex-development/tutils'
import type Comment from '../comment'
import type Parent from '../parent'
import type { RootData, default as TestSubject } from '../root'

describe('unit-d:nodes/Root', () => {
  it('should extend Parent', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<Parent>()
  })

  it('should match [children: Comment[]]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('children')
      .toEqualTypeOf<Comment[]>()
  })

  it('should match [data?: Optional<RootData>]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<RootData>>()
  })

  it('should match [position?: undefined]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('position').toBeUndefined()
  })

  it('should match [type: "root"]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('type').toEqualTypeOf<'root'>()
  })
})
