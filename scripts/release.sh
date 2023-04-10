#!/bin/sh

# Local Release Workflow
#
# 1. run typecheck
# 2. build project
# 3. run postbuild typecheck
# 4. print package size report
# 5. get new package version
# 6. get release branch name
# 7. switch to release branch
# 8. stage changes
# 9. commit changes
# 10. push release branch to origin
# 11. create pull request
#
# References:
#
# - https://cli.github.com/manual/gh_pr_create

yarn typecheck
yarn build
yarn check:types:build
yarn pkg-size
VERSION=$(jq .version package.json -r)
RELEASE_BRANCH=release/$VERSION
git switch -c $RELEASE_BRANCH
git add .
git commit -s -m "release: $(jq .tagPrefix package.json -r)$VERSION"
git push origin -u --no-verify $RELEASE_BRANCH
gh pr create --assignee @me --label scope:release --web
