/**
 * @file Type Tests - Modifier
 * @module docast/enums/tests/unit-d/Modifier
 */

import type TestSubject from '../modifier'

describe('unit-d:enums/Modifier', () => {
  it('should match [ABSTRACT = "abstract"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ABSTRACT')
      .extract<'abstract'>()
      .toBeString()
  })

  it('should match [ASYNC = "async"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ASYNC')
      .extract<'async'>()
      .toBeString()
  })

  it('should match [DECLARE = "declare"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('DECLARE')
      .extract<'declare'>()
      .toBeString()
  })

  it('should match [DEFAULT = "default"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('DEFAULT')
      .extract<'default'>()
      .toBeString()
  })

  it('should match [EXPORT = "export"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('EXPORT')
      .extract<'export'>()
      .toBeString()
  })

  it('should match [OVERRIDE = "override"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('OVERRIDE')
      .extract<'override'>()
      .toBeString()
  })

  it('should match [PRIVATE = "private"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('PRIVATE')
      .extract<'private'>()
      .toBeString()
  })

  it('should match [PROTECTED = "protected"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('PROTECTED')
      .extract<'protected'>()
      .toBeString()
  })

  it('should match [PUBLIC = "public"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('PUBLIC')
      .extract<'public'>()
      .toBeString()
  })

  it('should match [READONLY = "readonly"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('READONLY')
      .extract<'readonly'>()
      .toBeString()
  })

  it('should match [STATIC = "static"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('STATIC')
      .extract<'static'>()
      .toBeString()
  })
})
