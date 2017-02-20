#!/bin/bash

# This script uses Travis `TRAVIS_BRANCH` environment variable to check if the artifacts should be published.
#
# If the branch is `master`, script triggers the publishing process.
# Tests are skipped during the publishing, as the script should be executed on `after_success` step of
# the build lifecycle.

echo " -- PUBLISHING: current branch is $TRAVIS_BRANCH."

# `TRAVIS_EVENT_TYPE` with the `cron` value is a marker of a NIGHTLY build.
# See `./scripts/build.sh` for more details.
# Artifact publishing is now disabled for the NIGHTLY builds.

if [ "$TRAVIS_BRANCH" == 'master' ] && [ "$TRAVIS_PULL_REQUEST" = "false" ] && [ "$TRAVIS_EVENT_TYPE" != 'cron' ]; then
    echo " ------ Publishing the artifacts to the repository..."
    openssl aes-256-cbc -K $encrypted_0f12c1faf1fc_key -iv $encrypted_0f12c1faf1fc_iv -in credentials.properties.enc -out credentials.properties -d
    ./gradlew publish -x test
    echo " ------ Artifacts published."
else
    if [ "$TRAVIS_EVENT_TYPE" == 'cron' ]
        echo " ------ Publishing is DISABLED for the NIGHTLY build."
    else
        echo " ------ Publishing is DISABLED for the current branch."
    fi
fi

echo " -- PUBLISHING: completed."
