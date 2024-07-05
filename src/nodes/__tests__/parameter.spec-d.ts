/**
 * @file Type Tests - Parameter
 * @module docast/nodes/tests/unit-d/Parameter
 */

import type { Data, Parent } from '@flex-development/docast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../parameter'

describe('unit-d:nodes/Parameter', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.ParameterData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [data?: ParameterData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "parameter"]', () => {
    expectTypeOf<Subject>().toHaveProperty('type').toEqualTypeOf<'parameter'>()
  })

  describe('ParameterData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
