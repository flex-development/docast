#!/bin/sh

# Local Release Workflow

# 1. pack project
# 2. get new package version
# 3. get release branch name
# 4. switch to release branch
# 5. stage changes
# 6. commit changes
# 7. push release branch to origin
# 8. cleanup

yarn pack -o %s-%v.tgz
VERSION=$(jq .version package.json -r)
RELEASE_BRANCH=release/$VERSION
git switch -c $RELEASE_BRANCH
git add .
git commit -s -m "release: $(jq .tagPrefix package.json -r)$VERSION" --no-verify
git push origin -u --no-verify $RELEASE_BRANCH
yarn clean:pack
