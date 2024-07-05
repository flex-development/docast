/**
 * @file Type Tests - ModifierList
 * @module docast/nodes/tests/unit-d/ModifierList
 */

import type { Data, Parent } from '@flex-development/docast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../modifier-list'

describe('unit-d:nodes/ModifierList', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.ModifierListData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [data?: ModifierListData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "modifierList"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'modifierList'>()
  })

  describe('ModifierListData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
