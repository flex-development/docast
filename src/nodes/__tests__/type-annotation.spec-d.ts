/**
 * @file Type Tests - TypeAnnotation
 * @module docast/nodes/tests/unit-d/TypeAnnotation
 */

import type { Data, Parent } from '@flex-development/docast'
import type { Nilable, Optional } from '@flex-development/tutils'
import type * as TestSubject from '../type-annotation'

describe('unit-d:nodes/TypeAnnotation', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.TypeAnnotationData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [data?: TypeAnnotationData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [optional?: boolean | null | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('optional')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [type: "typeAnnotation"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'typeAnnotation'>()
  })

  describe('TypeAnnotationData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
