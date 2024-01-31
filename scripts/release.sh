#!/bin/sh

set -e

# Local Release Workflow
#
# 1. run typecheck
# 2. pack project
# 3. run postbuild typecheck
# 5. analyze types
# 5. create release chore commit
# 6. cleanup
#
# References:
#
# - https://git-scm.com/docs/git-commit
# - https://github.com/flex-development/grease
# - https://jqlang.github.io

yarn typecheck
yarn pack
yarn check:types:build
attw package.tgz
git commit --allow-empty -S -s -m "release(chore): $(jq .version -r <<<$(grease bump -j $@))"
yarn clean:pack
