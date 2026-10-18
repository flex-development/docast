/**
 * @file E2E Tests - api
 * @module docast-util-from-comments/tests/e2e/api
 */

import * as testSubject from '@flex-development/docast-util-from-comments'
import { describe, expect, it } from 'vitest'

describe('e2e:docast-util-from-comments', () => {
  it('should expose public api', () => {
    expect(Object.keys(testSubject)).toMatchSnapshot()
  })
})
