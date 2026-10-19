/**
 * @file Type Tests - CompileData
 * @module docast-compiler-types/tests/unit-d/CompileData
 */

import type * as mdast from '@flex-development/mdast-util-from-markdown'
import type { OptionalKeys } from '@flex-development/tutils'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../compile-data.mts'

describe('unit-d:CompileData', () => {
  it('should extend mdast.CompileData', () => {
    expectTypeOf<TestSubject>().toExtend<mdast.CompileData>()
  })

  it('should have all optional keys', () => {
    expectTypeOf<keyof TestSubject>().toEqualTypeOf<OptionalKeys<TestSubject>>()
  })
})
