/**
 * @file Type Tests - Indexer
 * @module docast/nodes/tests/unit-d/Indexer
 */

import type { Data, Parent } from '@flex-development/docast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../indexer'

describe('unit-d:nodes/Indexer', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.IndexerData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [data?: IndexerData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "indexer"]', () => {
    expectTypeOf<Subject>().toHaveProperty('type').toEqualTypeOf<'indexer'>()
  })

  describe('IndexerData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
