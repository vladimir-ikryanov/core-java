#!/bin/bash

# The script executes the Gradle build process for the whole project.
#
# Normally, the regular flow is executed (see below).
# The support for nightly builds is also implemented. To detect a nightly build,
# the `TRAVIS_EVENT_TYPE` environment variable is checked for `cron` value
# (see https://docs.travis-ci.com/user/cron-jobs/ for more details).

if [ "$TRAVIS_EVENT_TYPE" == 'cron' ]; then
    echo " -- Build type: NIGHTLY."

    # Invoke mutation testing task based on PIT library.
    # It can take some time to complete, so run it only in NIGHTLY mode.
    ./gradlew pitest --quiet
else
    echo " -- Build type: REGULAR."

    # Run without the mutation tests.
    # Use this option for the builds triggered by commits.
    ./gradlew check --stacktrace
fi
