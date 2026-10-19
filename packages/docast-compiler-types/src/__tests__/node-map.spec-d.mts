/**
 * @file Type Tests - NodeMap
 * @module docast-compiler-types/tests/unit-d/NodeMap
 */

import type {
  CommentCloser,
  CommentContentMap,
  CommentMarker,
  CommentOpener,
  CommentPadding,
  Identifier,
  Root,
  RootContentMap
} from '@flex-development/docast'
import type { Fragment } from '@flex-development/docast-compiler-types'
import type { RequiredKeys } from '@flex-development/tutils'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../node-map.mts'

describe('unit-d:NodeMap', () => {
  it('should extend CommentContentMap', () => {
    expectTypeOf<TestSubject>().toExtend<CommentContentMap>()
  })

  it('should extend RootContentMap', () => {
    expectTypeOf<TestSubject>().toExtend<RootContentMap>()
  })

  it('should have all required keys', () => {
    expectTypeOf<keyof TestSubject>().toEqualTypeOf<RequiredKeys<TestSubject>>()
  })

  it('should match [commentCloser: CommentCloser]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('commentCloser')
      .toEqualTypeOf<CommentCloser>()
  })

  it('should match [commentMarker: CommentMarker]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('commentMarker')
      .toEqualTypeOf<CommentMarker>()
  })

  it('should match [commentOpener: CommentOpener]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('commentOpener')
      .toEqualTypeOf<CommentOpener>()
  })

  it('should match [commentPadding: CommentPadding]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('commentPadding')
      .toEqualTypeOf<CommentPadding>()
  })

  it('should match [fragment: Fragment]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('fragment')
      .toEqualTypeOf<Fragment>()
  })

  it('should match [identifier: Identifier]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('identifier')
      .toEqualTypeOf<Identifier>()
  })

  it('should match [root: Root]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('root').toEqualTypeOf<Root>()
  })
})
