/**
 * @file Type Tests - Data
 * @module docast/interfaces/tests/unit-d/Data
 */

import type unist from 'unist'
import type TestSubject from '../data'

describe('unit-d:interfaces/Data', () => {
  it('should extend unist.Data', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<unist.Data>()
  })
})
