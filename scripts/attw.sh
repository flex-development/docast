#!/bin/sh

set -e

# attw
#
# Run `attw` in each package directory.
#
# References:
#
# - https://github.com/arethetypeswrong/arethetypeswrong.github.io/tree/main/packages/cli

for workspace in packages/*/; do
  attw --pack ${workspace}
done
