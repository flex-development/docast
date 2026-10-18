#!/bin/sh

set -e

# Current Versions
#
# Print the current package version.
#
# References:
#
# - https://jqlang.org/manual

manifest=

for workspace in packages/*/; do
  manifest=$workspace/package.json

  jq -r .name $manifest
  jq -r .version $manifest

  echo ---
done

manifest=./package.json

jq -r .name $manifest
jq -r .version $manifest
