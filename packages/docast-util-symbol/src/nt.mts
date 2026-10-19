/**
 * @file nt
 * @module docmark-util-symbol/nt
 */

/**
 * The node type dictionary.
 *
 * @enum {string}
 */
const nt = {
  blockquote: 'blockquote',
  break: 'break',
  code: 'code',
  codeSegment: 'codeSegment',
  comment: 'comment',
  commentCloser: 'commentCloser',
  commentLinePrefix: 'commentLinePrefix',
  commentMarker: 'commentMarker',
  commentOpener: 'commentOpener',
  commentPadding: 'commentPadding',
  definition: 'definition',
  delete: 'delete',
  emphasis: 'emphasis',
  footnoteDefinition: 'footnoteDefinition',
  footnoteReference: 'footnoteReference',
  heading: 'heading',
  html: 'html',
  identifier: 'identifier',
  image: 'image',
  imageReference: 'imageReference',
  inlineCode: 'inlineCode',
  inlineTag: 'inlineTag',
  link: 'link',
  linkReference: 'linkReference',
  list: 'list',
  listItem: 'listItem',
  namepath: 'namepath',
  namepathConnector: 'namepathConnector',
  paragraph: 'paragraph',
  root: 'root',
  strong: 'strong',
  summary: 'summary',
  table: 'table',
  tableCell: 'tableCell',
  tableRow: 'tableRow',
  tag: 'tag',
  tagName: 'tagName',
  text: 'text',
  thematicBreak: 'thematicBreak',
  typeMetadata: 'typeMetadata',
  yaml: 'yaml'
} as const

export default nt
