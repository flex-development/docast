/**
 * @file Type Tests - Type
 * @module docast/enums/tests/unit-d/Type
 */

import type TestSubject from '../type'

describe('unit-d:enums/Type', () => {
  it('should match [BLOCK_TAG = "block-tag"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('BLOCK_TAG')
      .extract<'block-tag'>()
      .toBeString()
  })

  it('should match [COMMENT = "comment"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('COMMENT')
      .extract<'comment'>()
      .toBeString()
  })

  it('should match [IMPLICIT_DESCRIPTION = "implicit-description"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('IMPLICIT_DESCRIPTION')
      .extract<'implicit-description'>()
      .toBeString()
  })

  it('should match [INLINE_TAG = "inline-tag"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('INLINE_TAG')
      .extract<'inline-tag'>()
      .toBeString()
  })

  it('should match [ROOT = "root"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ROOT')
      .extract<'root'>()
      .toBeString()
  })
})
