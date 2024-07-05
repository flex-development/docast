/**
 * @file Type Tests - ParameterList
 * @module docast/nodes/tests/unit-d/ParameterList
 */

import type { Data, Parent } from '@flex-development/docast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../parameter-list'

describe('unit-d:nodes/ParameterList', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.ParameterListData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [data?: ParamaterListData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "parameterList"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'parameterList'>()
  })

  describe('ParameterListData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
