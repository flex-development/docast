/**
 * @file Type Tests - Super
 * @module docast/nodes/tests/unit-d/Super
 */

import type { Data, Node } from '@flex-development/docast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../super'

describe('unit-d:nodes/Super', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.SuperData

  it('should extend Node', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Node>()
  })

  it('should match [data?: SuperData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "super"]', () => {
    expectTypeOf<Subject>().toHaveProperty('type').toEqualTypeOf<'super'>()
  })

  describe('SuperData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
