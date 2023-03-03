/**
 * @file Type Tests - Node
 * @module docast/nodes/tests/unit-d/Node
 */

import type { Type } from '#src/enums'
import type { Position } from '#src/interfaces'
import type unist from 'unist'
import type TestSubject from '../node'

describe('unit-d:nodes/Node', () => {
  it('should extend unist.Node<Data>', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<unist.Node>()
  })

  it('should match [data?: Data]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('data')
      .toEqualTypeOf<unist.Data | undefined>()
  })

  it('should match [position?: Position]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('position')
      .toEqualTypeOf<Position | undefined>()
  })

  it('should match [type: Type]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('type').toEqualTypeOf<Type>()
  })
})
