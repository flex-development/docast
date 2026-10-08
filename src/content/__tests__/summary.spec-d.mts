/**
 * @file Type Tests - summary
 * @module docast/content/tests/unit-d/summary
 */

import type { PhrasingContentMap } from '@flex-development/docast'
import type mdast from 'mdast'
import { describe, expectTypeOf, it } from 'vitest'
import type * as TestSubject from '../summary.mts'

describe('unit-d:content/summary', () => {
  describe('SummaryContent', () => {
    it('should equal SummaryContentMap[keyof SummaryContentMap]', () => {
      // Arrange
      type K = keyof TestSubject.SummaryContentMap
      type Expect = TestSubject.SummaryContentMap[K]

      // Expect
      expectTypeOf<TestSubject.SummaryContent>().toEqualTypeOf<Expect>()
    })
  })

  describe('SummaryContentMap', () => {
    it('should extend PhrasingContentMap', () => {
      expectTypeOf<TestSubject.SummaryContentMap>()
        .toExtend<PhrasingContentMap>()
    })

    it('should extend mdast.RootContentMap', () => {
      expectTypeOf<TestSubject.SummaryContentMap>()
        .toExtend<mdast.RootContentMap>()
    })
  })
})
