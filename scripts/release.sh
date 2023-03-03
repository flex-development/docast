#!/bin/sh

# Local Release Workflow

# 1. run typecheck
# 2. pack project
# 3. run postbuild typecheck
# 4. get new package version
# 5. get release branch name
# 6. switch to release branch
# 7. stage changes
# 8. commit changes
# 9. push release branch to origin
# 10. cleanup

yarn typecheck
yarn pack -o %s-%v.tgz
yarn check:types:build
VERSION=$(jq .version package.json -r)
RELEASE_BRANCH=release/$VERSION
git switch -c $RELEASE_BRANCH
git add .
git commit -s -m "release: $(jq .tagPrefix package.json -r)$VERSION"
git push origin -u --no-verify $RELEASE_BRANCH
yarn clean:pack
