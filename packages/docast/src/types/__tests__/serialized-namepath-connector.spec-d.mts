/**
 * @file Type Tests - SerializedNamepathConnector
 * @module docast/types/tests/unit-d/SerializedNamepathConnector
 */

import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../serialized-namepath-connector.mts'

describe('unit-d:types/SerializedNamepathConnector', () => {
  it('should extract "#"', () => {
    expectTypeOf<TestSubject>().extract<'#'>().not.toBeNever()
  })

  it('should extract "."', () => {
    expectTypeOf<TestSubject>().extract<'.'>().not.toBeNever()
  })

  it('should extract "~"', () => {
    expectTypeOf<TestSubject>().extract<'~'>().not.toBeNever()
  })
})
