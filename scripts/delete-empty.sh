#!/bin/sh

set -e

# delete-empty
#
# Delete empty directories in the `dist` directory of each package workspace.
#
# References:
#
# - https://github.com/jonschlinkert/delete-empty

for workspace in packages/*/; do
  directory=${workspace}dist
  echo Deleting empty directories in $directory/
  delete-empty $directory
done
