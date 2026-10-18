/**
 * @file Type Tests - Data
 * @module docast/interfaces/tests/unit-d/Data
 */

import type unist from 'unist'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../data.mts'

describe('unit-d:interfaces/Data', () => {
  it('should extend unist.Data', () => {
    expectTypeOf<TestSubject>().toExtend<unist.Data>()
  })
})
