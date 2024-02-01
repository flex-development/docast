/**
 * @file Type Tests - Description
 * @module docast/content/tests/unit-d/Description
 */

import type mdast from 'mdast'
import type * as TestSubject from '../description'
import type { PhrasingContentMap } from '../phrasing'

describe('unit-d:content/Description', () => {
  describe('DescriptionContentMap', () => {
    it('should extend  PhrasingContentMap', () => {
      expectTypeOf<TestSubject.DescriptionContentMap>()
        .toMatchTypeOf<PhrasingContentMap>()
    })

    it('should match [blockquote: mdast.Blockquote]', () => {
      expectTypeOf<TestSubject.DescriptionContentMap>()
        .toHaveProperty('blockquote')
        .toEqualTypeOf<mdast.Blockquote>
    })

    it('should match [definition: mdast.Definition]', () => {
      expectTypeOf<TestSubject.DescriptionContentMap>()
        .toHaveProperty('definition')
        .toEqualTypeOf<mdast.Definition>
    })

    it('should match [footnoteDefinition: mdast.FootnoteDefinition]', () => {
      expectTypeOf<TestSubject.DescriptionContentMap>()
        .toHaveProperty('footnoteDefinition')
        .toEqualTypeOf<mdast.FootnoteDefinition>
    })

    it('should match [list: mdast.List]', () => {
      expectTypeOf<TestSubject.DescriptionContentMap>()
        .toHaveProperty('list')
        .toEqualTypeOf<mdast.List>
    })

    it('should match [listItem: mdast.ListItem]', () => {
      expectTypeOf<TestSubject.DescriptionContentMap>()
        .toHaveProperty('listItem')
        .toEqualTypeOf<mdast.ListItem>
    })

    it('should match [paragraph: mdast.Paragraph]', () => {
      expectTypeOf<TestSubject.DescriptionContentMap>()
        .toHaveProperty('paragraph')
        .toEqualTypeOf<mdast.Paragraph>
    })

    it('should match [table: mdast.Table]', () => {
      expectTypeOf<TestSubject.DescriptionContentMap>()
        .toHaveProperty('table')
        .toEqualTypeOf<mdast.Table>
    })

    it('should match [thematicBreak: mdast.ThematicBreak]', () => {
      expectTypeOf<TestSubject.DescriptionContentMap>()
        .toHaveProperty('thematicBreak')
        .toEqualTypeOf<mdast.ThematicBreak>
    })
  })
})
