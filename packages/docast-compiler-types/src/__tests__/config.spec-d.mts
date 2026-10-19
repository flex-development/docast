/**
 * @file Type Tests - Config
 * @module docast-compiler-types/tests/unit-d/Config
 */

import type {
  Extension,
  Handle,
  Handles,
  Transform
} from '@flex-development/docast-compiler-types'
import type * as mark from '@flex-development/mark/ast'
import type { RequiredKeys } from '@flex-development/tutils'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../config.mts'

describe('unit-d:Config', () => {
  it('should extend Extension', () => {
    expectTypeOf<TestSubject>().toExtend<Extension>()
  })

  it('should extend mark.Config', () => {
    expectTypeOf<TestSubject>().toExtend<mark.Config>()
  })

  it('should have all required keys', () => {
    expectTypeOf<keyof TestSubject>().toEqualTypeOf<RequiredKeys<TestSubject>>()
  })

  it('should match [afterEnter: Handle[]]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('afterEnter')
      .toEqualTypeOf<Handle[]>()
  })

  it('should match [afterExit: Handle[]]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('afterExit')
      .toEqualTypeOf<Handle[]>()
  })

  it('should match [beforeEnter: Handle[]]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('beforeEnter')
      .toEqualTypeOf<Handle[]>()
  })

  it('should match [beforeExit: Handle[]]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('beforeExit')
      .toEqualTypeOf<Handle[]>()
  })

  it('should match [canContainEols: string[]]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('canContainEols')
      .toEqualTypeOf<string[]>()
  })

  it('should match [enter: Handles]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('enter').toEqualTypeOf<Handles>()
  })

  it('should match [exit: Handles]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('exit').toEqualTypeOf<Handles>()
  })

  it('should match [transforms: Transform[]]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('transforms')
      .toEqualTypeOf<Transform[]>()
  })
})
