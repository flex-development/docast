/**
 * @file Nodes - ObjectLiteralType
 * @module docast/nodes/ObjectLiteralType
 */

import type {
  CallSignature,
  ConstructSignature,
  Data,
  IndexSignature,
  MappedSignature,
  MethodSignature,
  Parent,
  PropertySignature
} from '@flex-development/docast'

/**
 * Info associated with object literal types.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface ObjectLiteralTypeData extends Data {}

/**
 * An object literal type.
 *
 * @example
 *  { x: number }
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface ObjectLiteralType extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode CallSignature}
   * @see {@linkcode ConstructSignature}
   * @see {@linkcode IndexSignature}
   * @see {@linkcode MappedSignature}
   * @see {@linkcode MethodSignature}
   * @see {@linkcode PropertySignature}
   */
  children: (
    | CallSignature
    | ConstructSignature
    | IndexSignature
    | MappedSignature
    | MethodSignature
    | PropertySignature
  )[]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode ObjectLiteralTypeData}
   */
  data?: ObjectLiteralTypeData | undefined

  /**
   * Node type.
   */
  type: 'objectLiteralType'
}

export type { ObjectLiteralType as default, ObjectLiteralTypeData }
