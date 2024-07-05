/**
 * @file Type Tests - TemplatePlaceholder
 * @module docast/nodes/tests/unit-d/TemplatePlaceholder
 */

import type { Data, Parent } from '@flex-development/docast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../template-placeholder'

describe('unit-d:nodes/TemplatePlaceholder', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.TemplatePlaceholderData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [data?: TemplatePlaceholderData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "templatePlaceholder"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'templatePlaceholder'>()
  })

  describe('TemplatePlaceholderData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
