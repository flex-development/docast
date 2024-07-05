/**
 * @file Type Tests - TemplateLiteral
 * @module docast/nodes/tests/unit-d/TemplateLiteral
 */

import type { Data, Parent } from '@flex-development/docast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../template-literal'

describe('unit-d:nodes/TemplateLiteral', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.TemplateLiteralData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [data?: TemplateLiteralData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "templateLiteral"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'templateLiteral'>()
  })

  describe('TemplateLiteralData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
