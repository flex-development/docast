/**
 * @file Type Tests - Root
 * @module docast/nodes/tests/unit-d/Root
 */

import type { Type } from '#src/enums'
import type Comment from '../comment'
import type Parent from '../parent'
import type TestSubject from '../root'

describe('unit-d:nodes/Root', () => {
  it('should extend Parent<Comment, Data>', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<Parent<Comment>>()
  })

  it('should match [position?: never]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('position')
      .toMatchTypeOf<never | undefined>()
  })

  it('should match [type: Type.ROOT]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('type')
      .toEqualTypeOf<Type.ROOT>()
  })
})
