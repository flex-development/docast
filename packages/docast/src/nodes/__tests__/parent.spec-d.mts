/**
 * @file Type Tests - Parent
 * @module docast/nodes/tests/unit-d/Parent
 */

import type { Child, Node } from '@flex-development/docast'
import type { RequiredKeys } from '@flex-development/tutils'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../parent.mts'

describe('unit-d:nodes/Parent', () => {
  type Required = RequiredKeys<TestSubject>

  it('should extend Node', () => {
    expectTypeOf<TestSubject>().toExtend<Node>()
  })

  it('should match [children: Child[]]', () => {
    expectTypeOf<Required>().extract<'children'>().not.toBeNever()
    expectTypeOf<TestSubject>()
      .toHaveProperty('children')
      .toEqualTypeOf<Child[]>()
  })
})
