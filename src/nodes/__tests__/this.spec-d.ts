/**
 * @file Type Tests - This
 * @module docast/nodes/tests/unit-d/This
 */

import type { Data, Node } from '@flex-development/docast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../this'

describe('unit-d:nodes/This', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.ThisData

  it('should extend Node', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Node>()
  })

  it('should match [data?: ThisData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "this"]', () => {
    expectTypeOf<Subject>().toHaveProperty('type').toEqualTypeOf<'this'>()
  })

  describe('ThisData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
