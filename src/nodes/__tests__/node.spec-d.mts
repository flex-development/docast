/**
 * @file Type Tests - Node
 * @module docast/nodes/tests/unit-d/Node
 */

import type { Data } from '@flex-development/docast'
import type { OptionalKeys } from '@flex-development/tutils'
import type unist from 'unist'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../node.mts'

describe('unit-d:nodes/Node', () => {
  type Optional = OptionalKeys<TestSubject>

  it('should extend unist.Node', () => {
    expectTypeOf<TestSubject>().toExtend<unist.Node>()
  })

  it('should match [data?: Data | undefined]', () => {
    expectTypeOf<Optional>().extract<'data'>().not.toBeNever()
    expectTypeOf<TestSubject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Data | undefined>()
  })

  it('should match [position?: unist.Position | undefined]', () => {
    expectTypeOf<Optional>().extract<'position'>().not.toBeNever()
    expectTypeOf<TestSubject>()
      .toHaveProperty('position')
      .toEqualTypeOf<unist.Position | undefined>()
  })
})
