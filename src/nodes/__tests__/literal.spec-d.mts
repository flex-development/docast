/**
 * @file Type Tests - Literal
 * @module docast/nodes/tests/unit-d/Literal
 */

import type { Node } from '@flex-development/docast'
import type { JsonPrimitive, RequiredKeys } from '@flex-development/tutils'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../literal.mts'

describe('unit-d:nodes/Literal', () => {
  type Required = RequiredKeys<TestSubject>

  it('should extend Node', () => {
    expectTypeOf<TestSubject>().toExtend<Node>()
  })

  it('should match [value: bigint | boolean | number | string | null | undefined]', () => {
    expectTypeOf<Required>().extract<'value'>().not.toBeNever()
    expectTypeOf<TestSubject>()
      .toHaveProperty('value')
      .toEqualTypeOf<JsonPrimitive | bigint | undefined>()
  })
})
