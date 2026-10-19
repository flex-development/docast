/**
 * @file Type Tests - Extension
 * @module docast-compiler-types/tests/unit-d/Extension
 */

import type {
  Handle,
  Handles,
  Transform
} from '@flex-development/docast-compiler-types'
import type * as mark from '@flex-development/mark/ast'
import type { Nilable, OptionalKeys } from '@flex-development/tutils'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../extension.mts'

describe('unit-d:Extension', () => {
  it('should extend mark.Extension', () => {
    expectTypeOf<TestSubject>().toExtend<mark.Extension>()
  })

  it('should have all optional keys', () => {
    expectTypeOf<keyof TestSubject>().toEqualTypeOf<OptionalKeys<TestSubject>>()
  })

  it('should match [afterEnter?: Handle | Handle[] | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('afterEnter')
      .toEqualTypeOf<Nilable<Handle | Handle[]>>()
  })

  it('should match [afterExit?: Handle | Handle[] | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('afterExit')
      .toEqualTypeOf<Nilable<Handle | Handle[]>>()
  })

  it('should match [beforeEnter?: Handle | Handle[] | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('beforeEnter')
      .toEqualTypeOf<Nilable<Handle | Handle[]>>()
  })

  it('should match [beforeExit?: Handle | Handle[] | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('beforeExit')
      .toEqualTypeOf<Nilable<Handle | Handle[]>>()
  })

  it('should match [canContainEols?: string[] | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('canContainEols')
      .toEqualTypeOf<string[] | undefined>()
  })

  it('should match [enter?: Handles | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('enter')
      .toEqualTypeOf<Handles | undefined>()
  })

  it('should match [exit?: Handles | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('exit')
      .toEqualTypeOf<Handles | undefined>()
  })

  it('should match [transforms?: Transform[] | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('transforms')
      .toEqualTypeOf<Transform[] | undefined>()
  })
})
