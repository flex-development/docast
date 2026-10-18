/**
 * @file Utilities - listExamples
 * @module utils/listExamples
 */

import fs, { type Dirent } from 'node:fs'

/**
 * Read the `examples` directory.
 *
 * @see {@linkcode Dirent}
 *
 * @this {void}
 *
 * @return {ReadonlyArray<Dirent>}
 *  The list of directory entries that are directories
 */
function listWorkspaces(this: void): readonly Dirent[] {
  return fs.readdirSync('examples', { withFileTypes: true }).filter(dirent => {
    return dirent.isDirectory()
  })
}

export default listWorkspaces
