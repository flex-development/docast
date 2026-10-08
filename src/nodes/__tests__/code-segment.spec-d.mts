/**
 * @file Type Tests - CodeSegment
 * @module docast/nodes/tests/unit-d/CodeSegment
 */

import type { Comment, Data, Parent } from '@flex-development/docast'
import type { OptionalKeys, RequiredKeys } from '@flex-development/tutils'
import { describe, expectTypeOf, it } from 'vitest'
import type * as TestSubject from '../code-segment.mts'

describe('unit-d:nodes/CodeSegment', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.CodeSegmentData

  type Optional = OptionalKeys<Subject>
  type Required = RequiredKeys<Subject>

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toExtend<Parent>()
  })

  it('should match [children: [CodeSegment | Comment, ...(CodeSegment | Comment)[]]]', () => {
    expectTypeOf<Required>().extract<'children'>().not.toBeNever()
    expectTypeOf<Subject>()
      .toHaveProperty('children')
      .toEqualTypeOf<[Comment | Subject, ...(Comment | Subject)[]]>()
  })

  it('should match [data?: CodeSegmentData | undefined]', () => {
    expectTypeOf<Optional>().extract<'data'>().not.toBeNever()
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<SubjectData | undefined>()
  })

  it('should match [name?: CodeSegmentName extends never ? string : CodeSegmentName | undefined]', () => {
    expectTypeOf<Optional>().extract<'name'>().not.toBeNever()
    expectTypeOf<Subject>()
      .toHaveProperty('name')
      .toEqualTypeOf<string | undefined>()
  })

  it('should match [type: "codeSegment"]', () => {
    expectTypeOf<Required>().extract<'type'>().not.toBeNever()
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'codeSegment'>()
  })

  describe('CodeSegmentData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toExtend<Data>()
    })
  })
})
