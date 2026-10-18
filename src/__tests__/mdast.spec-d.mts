/**
 * @file Type Tests - mdast
 * @module docast/nodes/tests/unit-d/mdast
 */

import type NodeObject from '#tests/types/node-object'
import type { CommentLinePrefix, InlineTag } from '@flex-development/docast'
import type mdast from 'mdast'
import { describe, expectTypeOf, it } from 'vitest'

describe('unit-d:mdast', () => {
  describe('PhrasingContentMap', () => {
    it('should match NodeObject<CommentLinePrefix>', () => {
      expectTypeOf<mdast.PhrasingContentMap>()
        .toExtend<NodeObject<CommentLinePrefix>>()
    })

    it('should match NodeObject<InlineTag>', () => {
      expectTypeOf<mdast.PhrasingContentMap>()
        .toExtend<NodeObject<InlineTag>>()
    })
  })
})
