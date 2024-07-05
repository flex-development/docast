/**
 * @file Type Tests - TypeSymbol
 * @module docast/nodes/tests/unit-d/TypeSymbol
 */

import type { Literal, TypeSymbolValue } from '@flex-development/docast'
import type * as TestSubject from '../type-symbol'

describe('unit-d:nodes/TypeSymbol', () => {
  type Subject = TestSubject.default

  it('should extend Literal', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Literal>()
  })

  it('should match [type: "typeSymbol"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'typeSymbol'>()
  })

  it('should match [value: TypeSymbolValue]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('value')
      .toEqualTypeOf<TypeSymbolValue>()
  })
})
