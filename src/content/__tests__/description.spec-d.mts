/**
 * @file Type Tests - description
 * @module docast/content/tests/unit-d/description
 */

import type * as TestSubject from '#content/description'
import type NodeObject from '#tests/types/node-object'
import type { PhrasingContentMap } from '@flex-development/docast'
import type mdast from 'mdast'

describe('unit-d:content/description', () => {
  describe('DescriptionContent', () => {
    it('should equal DescriptionContentMap[keyof DescriptionContentMap]', () => {
      // Arrange
      type K = keyof TestSubject.DescriptionContentMap
      type Expect = TestSubject.DescriptionContentMap[K]

      // Expect
      expectTypeOf<TestSubject.DescriptionContent>().toEqualTypeOf<Expect>()
    })
  })

  describe('DescriptionContentMap', () => {
    it('should extend PhrasingContentMap', () => {
      expectTypeOf<TestSubject.DescriptionContentMap>()
        .toMatchTypeOf<PhrasingContentMap>()
    })

    it('should match NodeObject<mdast.Blockquote>', () => {
      expectTypeOf<TestSubject.DescriptionContentMap>()
        .toMatchTypeOf<NodeObject<mdast.Blockquote>>()
    })

    it('should match NodeObject<mdast.Code>', () => {
      expectTypeOf<TestSubject.DescriptionContentMap>()
        .toMatchTypeOf<NodeObject<mdast.Code>>()
    })

    it('should match NodeObject<mdast.Definition>', () => {
      expectTypeOf<TestSubject.DescriptionContentMap>()
        .toMatchTypeOf<NodeObject<mdast.Definition>>()
    })

    it('should match NodeObject<mdast.FootnoteDefinition>', () => {
      expectTypeOf<TestSubject.DescriptionContentMap>()
        .toMatchTypeOf<NodeObject<mdast.FootnoteDefinition>>()
    })

    it('should match NodeObject<mdast.List>', () => {
      expectTypeOf<TestSubject.DescriptionContentMap>()
        .toMatchTypeOf<NodeObject<mdast.List>>()
    })

    it('should match NodeObject<mdast.ListItem>', () => {
      expectTypeOf<TestSubject.DescriptionContentMap>()
        .toMatchTypeOf<NodeObject<mdast.ListItem>>()
    })

    it('should match NodeObject<mdast.Paragraph>', () => {
      expectTypeOf<TestSubject.DescriptionContentMap>()
        .toMatchTypeOf<NodeObject<mdast.Paragraph>>()
    })

    it('should match NodeObject<mdast.Table>', () => {
      expectTypeOf<TestSubject.DescriptionContentMap>()
        .toMatchTypeOf<NodeObject<mdast.Table>>()
    })

    it('should match NodeObject<mdast.TableCell>', () => {
      expectTypeOf<TestSubject.DescriptionContentMap>()
        .toMatchTypeOf<NodeObject<mdast.TableCell>>()
    })

    it('should match NodeObject<mdast.TableRow>', () => {
      expectTypeOf<TestSubject.DescriptionContentMap>()
        .toMatchTypeOf<NodeObject<mdast.TableRow>>()
    })

    it('should match NodeObject<mdast.ThematicBreak>', () => {
      expectTypeOf<TestSubject.DescriptionContentMap>()
        .toMatchTypeOf<NodeObject<mdast.ThematicBreak>>()
    })
  })
})
