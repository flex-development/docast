/**
 * @file Type Tests - BlockTag
 * @module docast/content/tests/unit-d/BlockTag
 */

import type { TypeExpression } from '#src/nodes'
import type * as TestSubject from '../block-tag'
import type { PhrasingContentMap } from '../phrasing'

describe('unit-d:content/BlockTag', () => {
  describe('BlockTagContentMap', () => {
    it('should extend PhrasingContentMap', () => {
      expectTypeOf<TestSubject.BlockTagContentMap>()
        .toMatchTypeOf<PhrasingContentMap>()
    })

    it('should match [typeExpression: TypeExpression]', () => {
      expectTypeOf<TestSubject.BlockTagContentMap>()
        .toHaveProperty('typeExpression')
        .toEqualTypeOf<TypeExpression>
    })
  })
})
