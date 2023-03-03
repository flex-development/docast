/**
 * @file Type Tests - Point
 * @module docast/interfaces/tests/unit-d/Point
 */

import type unist from 'unist'
import type TestSubject from '../point'

describe('unit-d:interfaces/Point', () => {
  it('should extend Required<unist.Point>', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<Required<unist.Point>>()
  })
})
