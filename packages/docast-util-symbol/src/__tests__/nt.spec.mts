/**
 * @file Unit Tests - nt
 * @module docast-util-symbol/tests/unit/nt
 */

import { describe, expect, it } from 'vitest'
import testSubject from '../nt.mts'

describe('unit:nt', () => {
  it('should be node type dictionary', () => {
    expect(testSubject).toMatchSnapshot()
  })
})
