/**
 * @file Type Tests - BlockTag
 * @module docast/content/tests/unit-d/BlockTag
 */

import type { TypeExpression } from '#src/nodes'
import type mdast from 'mdast'
import type * as TestSubject from '../block-tag'
import type { PhrasingContentMap } from '../phrasing'

describe('unit-d:content/BlockTag', () => {
  describe('BlockTagContentMap', () => {
    it('should extend PhrasingContentMap', () => {
      expectTypeOf<TestSubject.BlockTagContentMap>()
        .toMatchTypeOf<PhrasingContentMap>()
    })

    it('should match [code: mdast.Code]', () => {
      expectTypeOf<TestSubject.BlockTagContentMap>()
        .toHaveProperty('code')
        .toEqualTypeOf<mdast.Code>
    })

    it('should match [typeExpression: TypeExpression]', () => {
      expectTypeOf<TestSubject.BlockTagContentMap>()
        .toHaveProperty('typeExpression')
        .toEqualTypeOf<TypeExpression>
    })
  })
})
