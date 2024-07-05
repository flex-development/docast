/**
 * @file Type Tests - TemplateElement
 * @module docast/nodes/tests/unit-d/TemplateElement
 */

import type { Data, Literal } from '@flex-development/docast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../template-element'

describe('unit-d:nodes/TemplateElement', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.TemplateElementData

  it('should extend Literal', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Literal>()
  })

  it('should match [data?: TemplateElementData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "templateElement"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'templateElement'>()
  })

  it('should match [value: string]', () => {
    expectTypeOf<Subject>().toHaveProperty('value').toEqualTypeOf<string>()
  })

  describe('TemplateElementData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
