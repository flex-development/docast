/**
 * @file Type Tests - Node
 * @module docast/nodes/tests/unit-d/Node
 */

import type { Data } from '@flex-development/docast'
import type { Optional } from '@flex-development/tutils'
import type unist from 'unist'
import type TestSubject from '../node'

describe('unit-d:nodes/Node', () => {
  it('should extend unist.Node', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<unist.Node>()
  })

  it('should match [data?: Data | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<Data>>()
  })

  it('should match [position?: unist.Position | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('position')
      .toEqualTypeOf<Optional<unist.Position>>()
  })
})
