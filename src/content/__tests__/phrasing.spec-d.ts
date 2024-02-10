/**
 * @file Type Tests - Phrasing
 * @module docast/content/tests/unit-d/Phrasing
 */

import type { InlineTag } from '#src/nodes'
import type mdast from 'mdast'
import type * as TestSubject from '../phrasing'

describe('unit-d:content/Phrasing', () => {
  describe('PhrasingContentMap', () => {
    it('should extend mdast.PhrasingContentMap', () => {
      expectTypeOf<TestSubject.PhrasingContentMap>()
        .toMatchTypeOf<mdast.PhrasingContentMap>()
    })

    it('should match [inlineTag: InlineTag]', () => {
      expectTypeOf<TestSubject.PhrasingContentMap>()
        .toHaveProperty('inlineTag')
        .toEqualTypeOf<InlineTag>
    })
  })
})
