/**
 * @file Enums - Type
 * @module docast/enums/Type
 */

/**
 * Node variants.
 *
 * @see https://github.com/syntax-tree/unist#type
 *
 * @enum {Lowercase<string>}
 */
enum Type {
  BLOCK_TAG = 'block-tag',
  COMMENT = 'comment',
  IMPLICIT_DESCRIPTION = 'implicit-description',
  INLINE_TAG = 'inline-tag',
  ROOT = 'root'
}

export default Type
