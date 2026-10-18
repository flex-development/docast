/**
 * @file Type Tests - NamepathConnector
 * @module docast/nodes/tests/unit-d/NamepathConnector
 */

import type {
  Data,
  Literal,
  SerializedNamepathConnector
} from '@flex-development/docast'
import type { OptionalKeys, RequiredKeys } from '@flex-development/tutils'
import { describe, expectTypeOf, it } from 'vitest'
import type * as TestSubject from '../namepath-connector.mts'

describe('unit-d:nodes/NamepathConnector', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.NamepathConnectorData

  type Optional = OptionalKeys<Subject>
  type Required = RequiredKeys<Subject>

  it('should extend Literal', () => {
    expectTypeOf<Subject>().toExtend<Literal>()
  })

  it('should match [data?: NamepathConnectorData | undefined]', () => {
    expectTypeOf<Optional>().extract<'data'>().not.toBeNever()
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<SubjectData | undefined>()
  })

  it('should match [type: "namepathConnector"]', () => {
    expectTypeOf<Required>().extract<'type'>().not.toBeNever()
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'namepathConnector'>()
  })

  it('should match [value: SerializedNamepathConnector]', () => {
    expectTypeOf<Required>().extract<'value'>().not.toBeNever()
    expectTypeOf<Subject>()
      .toHaveProperty('value')
      .toEqualTypeOf<SerializedNamepathConnector>()
  })

  describe('NamepathConnectorData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toExtend<Data>()
    })
  })
})
