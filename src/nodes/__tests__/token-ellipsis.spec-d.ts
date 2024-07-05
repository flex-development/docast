/**
 * @file Type Tests - EllipsisToken
 * @module docast/nodes/tests/unit-d/EllipsisToken
 */

import type { Node } from '@flex-development/docast'
import type TestSubject from '../token-ellipsis'

describe('unit-d:nodes/EllipsisToken', () => {
  it('should extend Node', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<Node>()
  })

  it('should match [type: "ellipsisToken"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'ellipsisToken'>()
  })
})
