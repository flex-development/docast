/**
 * @file Type Tests - Position
 * @module docast/interfaces/tests/unit-d/Position
 */

import type unist from 'unist'
import type Point from '../point'
import type TestSubject from '../position'

describe('unit-d:interfaces/Position', () => {
  it('should extend unist.Position', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<unist.Position>()
  })

  it('should match [end: Point]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('end').toEqualTypeOf<Point>()
  })

  it('should match [start: Point]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('start').toEqualTypeOf<Point>()
  })
})
