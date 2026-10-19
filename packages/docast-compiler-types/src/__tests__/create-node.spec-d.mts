/**
 * @file Type Tests - CreateNode
 * @module docast-compiler-types/tests/unit-d/CreateNode
 */

import type { Node } from '@flex-development/docast-compiler-types'
import type { Token } from '@flex-development/docmark-util-types'
import type * as mark from '@flex-development/mark/ast'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../create-node.mts'

describe('unit-d:CreateNode', () => {
  it('should extend mark.CreateNode', () => {
    expectTypeOf<TestSubject>().toExtend<mark.CreateNode>()
  })

  it('should match [this: void]', () => {
    expectTypeOf<TestSubject>().thisParameter.toEqualTypeOf<void>()
  })

  describe('parameters', () => {
    it('should be callable with [Token<T>]', () => {
      expectTypeOf<TestSubject>().parameters.toEqualTypeOf<[Token]>()
    })
  })

  describe('returns', () => {
    it('should return N', () => {
      expectTypeOf<TestSubject>().returns.toEqualTypeOf<Node>()
    })
  })
})
