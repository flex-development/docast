/**
 * @file Type Aliases - TagName
 * @module docast/types/TagName
 */

/**
 * A tag name.
 *
 * Tag names start with an at-sign (`@`) and may contain any ASCII letters
 * after the at-sign.
 *
 * @template {string} [T=string] - Tag name text
 */
type TagName<T extends string = string> = `@${T}`

export type { TagName as default }
