/**
 * @file Type Tests - CodeSegmentNameMap
 * @module mark/parse/interfaces/tests/unit-d/CodeSegmentNameMap
 */

import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../code-segment-name-map.mts'

describe('unit-d:interfaces/CodeSegmentNameMap', () => {
  it('should register code segment names', () => {
    expectTypeOf<keyof TestSubject>().toBeNever()
  })
})
