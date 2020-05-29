#!/usr/bin/env bash

echo "##############################POST BUILD TESTING STARTED"
echo "APPCENTER_BUILD_ID: $APPCENTER_BUILD_ID"
echo "APPCENTER_BRANCH: $APPCENTER_BRANCH"
echo "APPCENTER_SOURCE_DIRECTORY: $APPCENTER_SOURCE_DIRECTORY"
echo "APPCENTER_OUTPUT_DIRECTORY: $APPCENTER_OUTPUT_DIRECTORY"
echo "APPCENTER_TRIGGER: $APPCENTER_TRIGGER"

git clone https://github.com/semcelik/appium-java-playground.git

E2E_PATH=appium-java-playground
TEST_SOURCE=$APPCENTER_SOURCE_DIRECTORY/$E2E_PATH/target/upload

cd $E2E_PATH
sh generate-test-sources.sh
cd ..

echo "###"
ls $APPCENTER_SOURCE_DIRECTORY
echo "###"
ls $APPCENTER_OUTPUT_DIRECTORY

appcenter test run appium --app "semcelik/RNAppiumApp" --devices "semcelik/test-1" --app-path $APPCENTER_OUTPUT_DIRECTORY/*.apk --test-series "launch-tests" --locale "en_US" --build-dir $TEST_SOURCE --token $APP_TOKEN --async
echo "##############################TESTING FINISHED"

