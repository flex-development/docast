/**
 * @file Type Tests - Flow
 * @module docast/content/tests/unit-d/Flow
 */

import type { BlockTag, Description } from '#src/nodes'
import type * as TestSubject from '../flow'

describe('unit-d:content/Flow', () => {
  describe('FlowContentMap', () => {
    it('should match [blockTag: BlockTag]', () => {
      expectTypeOf<TestSubject.FlowContentMap>()
        .toHaveProperty('blockTag')
        .toEqualTypeOf<BlockTag>
    })

    it('should match [description: Description]', () => {
      expectTypeOf<TestSubject.FlowContentMap>()
        .toHaveProperty('description')
        .toEqualTypeOf<Description>
    })
  })
})
