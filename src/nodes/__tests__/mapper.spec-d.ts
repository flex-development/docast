/**
 * @file Type Tests - Mapper
 * @module docast/nodes/tests/unit-d/Mapper
 */

import type { Data, Parent } from '@flex-development/docast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../mapper'

describe('unit-d:nodes/Mapper', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.MapperData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [data?: MapperData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "mapper"]', () => {
    expectTypeOf<Subject>().toHaveProperty('type').toEqualTypeOf<'mapper'>()
  })

  describe('MapperData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
