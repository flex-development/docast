/**
 * @file E2E Tests - api
 * @module docast-util-symbol/tests/e2e/api
 */

import * as testSubject from '@flex-development/docast-util-symbol'
import { describe, expect, it } from 'vitest'

describe('e2e:docast-util-symbol', () => {
  it('should expose public api', () => {
    expect(Object.keys(testSubject)).toMatchSnapshot()
  })
})
