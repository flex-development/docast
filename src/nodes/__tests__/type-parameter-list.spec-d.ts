/**
 * @file Type Tests - TypeParameterList
 * @module docast/nodes/tests/unit-d/TypeParameterList
 */

import type { Data, Parent } from '@flex-development/docast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../type-parameter-list'

describe('unit-d:nodes/TypeParameterList', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.TypeParameterListData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [data?: TypeParameterListData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "typeParameterList"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'typeParameterList'>()
  })

  describe('TypeParameterListData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
