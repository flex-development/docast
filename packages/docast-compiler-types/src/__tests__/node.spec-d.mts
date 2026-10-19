/**
 * @file Type Tests - Node
 * @module docast-compiler-types/tests/unit-d/Node
 */

import type { NodeMap } from '@flex-development/docast-compiler-types'
import type * as mark from '@flex-development/mark/ast'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../node.mts'

describe('unit-d:Node', () => {
  it('should equal NodeMap[keyof NodeMap]', () => {
    expectTypeOf<TestSubject>().toEqualTypeOf<NodeMap[keyof NodeMap]>()
  })

  it('should equal mark.Node', () => {
    expectTypeOf<TestSubject>().toEqualTypeOf<mark.Node>()
  })
})
