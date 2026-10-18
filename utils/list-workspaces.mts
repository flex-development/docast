/**
 * @file Utilities - listWorkspaces
 * @module utils/listWorkspaces
 */

import fs, { type Dirent } from 'node:fs'

/**
 * Read the `packages` directory.
 *
 * @see {@linkcode Dirent}
 *
 * @this {void}
 *
 * @return {ReadonlyArray<Dirent>}
 *  The list of directory entries that are directories
 */
function listWorkspaces(this: void): readonly Dirent[] {
  return fs.readdirSync('packages', { withFileTypes: true }).filter(dirent => {
    return dirent.isDirectory()
  })
}

export default listWorkspaces
