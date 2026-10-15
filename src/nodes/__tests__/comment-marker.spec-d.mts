/**
 * @file Type Tests - CommentMarker
 * @module docast/nodes/tests/unit-d/CommentMarker
 */

import type { Data, Literal } from '@flex-development/docast'
import type { OptionalKeys, RequiredKeys } from '@flex-development/tutils'
import { describe, expectTypeOf, it } from 'vitest'
import type * as TestSubject from '../comment-marker.mts'

describe('unit-d:nodes/CommentMarker', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.CommentMarkerData

  type Optional = OptionalKeys<Subject>
  type Required = RequiredKeys<Subject>

  it('should extend Literal', () => {
    expectTypeOf<Subject>().toExtend<Literal>()
  })

  it('should match [data?: CommentMarkerData | undefined]', () => {
    expectTypeOf<Optional>().extract<'data'>().not.toBeNever()
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<SubjectData | undefined>()
  })

  it('should match [type: "commentMarker"]', () => {
    expectTypeOf<Required>().extract<'type'>().not.toBeNever()
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'commentMarker'>()
  })

  it('should match [value: SerializedCommentMarker extends never ? SerializedMarker : SerializedCommentMarker]', () => {
    expectTypeOf<Required>().extract<'value'>().not.toBeNever()
    expectTypeOf<Subject>()
      .toHaveProperty('value')
      .toEqualTypeOf<string>()
  })

  describe('CommentMarkerData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toExtend<Data>()
    })
  })
})
