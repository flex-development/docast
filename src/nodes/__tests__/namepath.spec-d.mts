/**
 * @file Type Tests - Namepath
 * @module docast/nodes/tests/unit-d/Namepath
 */

import type {
  Data,
  Identifier,
  NamepathConnector,
  Parent
} from '@flex-development/docast'
import type {
  Nilable,
  OptionalKeys,
  RequiredKeys
} from '@flex-development/tutils'
import { describe, expectTypeOf, it } from 'vitest'
import type * as TestSubject from '../namepath.mts'

describe('unit-d:nodes/Namepath', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.NamepathData

  type Optional = OptionalKeys<Subject>
  type Required = RequiredKeys<Subject>

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toExtend<Parent>()
  })

  it('should match [children: [Identifier, ...(Identifier | NamepathConnector)[]]]', () => {
    // Arrange
    expectTypeOf<Required>().extract<'children'>().not.toBeNever()
    expectTypeOf<Subject>()
      .toHaveProperty('children')
      .toEqualTypeOf<[Identifier, ...(Identifier | NamepathConnector)[]]>()
  })

  it('should match [data?: NamepathData | undefined]', () => {
    expectTypeOf<Optional>().extract<'data'>().not.toBeNever()
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<SubjectData | undefined>()
  })

  it('should match [type: "namepath"]', () => {
    expectTypeOf<Required>().extract<'type'>().not.toBeNever()
    expectTypeOf<Subject>().toHaveProperty('type').toEqualTypeOf<'namepath'>()
  })

  describe('NamepathData', () => {
    type Optional = OptionalKeys<SubjectData>

    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toExtend<Data>()
    })

    it('should match [optional?: boolean | null | undefined]', () => {
      expectTypeOf<Optional>().extract<'optional'>().not.toBeNever()
      expectTypeOf<SubjectData>()
        .toHaveProperty('optional')
        .toEqualTypeOf<Nilable<boolean>>()
    })
  })
})
