/**
 * @file Type Tests - docast
 * @module docast/nodes/tests/unit-d/docast
 */

import type * as TestSubject from '@flex-development/docast'
import type { Children } from '@flex-development/unist-util-types'
import type { Node } from 'unist'

describe('unit-d:docast', () => {
  describe('DocastNode', () => {
    type Subject = TestSubject.DocastNode

    it('should be union of nodes', () => {
      expectTypeOf<Extract<Subject, Node>>().toEqualTypeOf<Subject>()
    })
  })

  describe('Extract<AnyParent, DocastNode>', () => {
    type Subject = Extract<TestSubject.AnyParent, TestSubject.DocastNode>

    it('should override Parent["children"]', () => {
      // Arrange
      type Helper<T extends unknown[]> = T extends Children<TestSubject.Parent>
        ? Children<TestSubject.Parent> extends T ? 0 : 1
        : unknown

      // Expect
      expectTypeOf<Helper<Children<Subject>>>().toEqualTypeOf<1>()
    })
  })
})
