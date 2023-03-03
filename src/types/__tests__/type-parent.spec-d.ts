/**
 * @file Type Tests - ParentType
 * @module docast/types/tests/unit-d/ParentType
 */

import type { Type } from '#src/enums'
import type TestSubject from '../type-parent'

describe('unit-d:types/ParentType', () => {
  it('should extract Type.BLOCK_TAG', () => {
    expectTypeOf<TestSubject>().extract<Type.BLOCK_TAG>().toBeString()
  })

  it('should extract Type.COMMENT', () => {
    expectTypeOf<TestSubject>().extract<Type.COMMENT>().toBeString()
  })

  it('should extract Type.IMPLICIT_DESCRIPTION', () => {
    expectTypeOf<TestSubject>()
      .extract<Type.IMPLICIT_DESCRIPTION>()
      .toBeString()
  })

  it('should extract Type.ROOT', () => {
    expectTypeOf<TestSubject>().extract<Type.ROOT>().toBeString()
  })
})
