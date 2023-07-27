#!/bin/sh

# Local Release Workflow
#
# 1. run typecheck
# 2. pack project
# 3. run postbuild typecheck
# 4. analyze types
# 5. print package size report
# 6. get new package version
# 7. get release branch name
# 8. switch to release branch
# 9. stage changes
# 10. commit changes
# 11. push release branch to origin
# 12. create pull request
# 13. cleanup
#
# References:
#
# - https://cli.github.com/manual/gh_pr_create
# - https://github.com/arethetypeswrong/arethetypeswrong.github.io

yarn typecheck
yarn pack
yarn check:types:build
attw package.tgz
yarn pkg-size
VERSION=$(jq .version package.json -r)
RELEASE_BRANCH=release/$VERSION
git switch -c $RELEASE_BRANCH
git add .
git commit -s -m "release: $(jq .tagPrefix package.json -r)$VERSION"
git push origin -u --no-verify $RELEASE_BRANCH
gh pr create --assignee @me --label scope:release --web
yarn clean:pack
