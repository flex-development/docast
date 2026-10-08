/**
 * @file Type Aliases - SerializedTagName
 * @module docast/types/SerializedTagName
 */

/**
 * A serialized tag name.
 *
 * @template {string} [Identifier=string]
 *  The tag name identifier
 */
type SerializedTagName<Identifier extends string = string> = `@${Identifier}`

export type { SerializedTagName as default }
