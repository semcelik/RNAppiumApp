#!/usr/bin/env bash

echo "##############################POST BUILD TESTING STARTED"
echo "TEST_PLATFORM: $TEST_PLATFORM"
echo "APPCENTER_SOURCE_DIRECTORY: $APPCENTER_SOURCE_DIRECTORY" #/Users/runner/runners/2.170.1/work/1/s
echo "APPCENTER_OUTPUT_DIRECTORY: $APPCENTER_OUTPUT_DIRECTORY" #/Users/runner/runners/2.170.1/work/1/a/build
echo "TEST_APP: $TEST_APP"
echo "TEST_DEVICES: $TEST_DEVICES"
echo "TEST_SERIES: $TEST_SERIES"
echo "TEST_APP_PATH: $TEST_APP_PATH"
echo "TEST_LOCALE: $TEST_LOCALE"

ls $APPCENTER_OUTPUT_DIRECTORY


if [[ $TEST_PLATFORM != "android" && $TEST_PLATFORM != "ios" ]]; then
  echo "$TEST_PLATFORM is not valid. it should be 'ios' or 'android'"
  exit 0
  fi

git clone -b b-5 --single-branch https://github.com/semcelik/appium-java-playground.git

E2E_PATH=appium-java-playground
TEST_SOURCE=$APPCENTER_SOURCE_DIRECTORY/$E2E_PATH/target/upload

cd $E2E_PATH
sh generate-test-sources.sh $TEST_PLATFORM
cd ..

appcenter test run appium --app $TEST_APP --devices $TEST_DEVICES --app-path $APPCENTER_OUTPUT_DIRECTORY/$TEST_APP_PATH --test-series $TEST_SERIES --locale $TEST_LOCALE --build-dir $TEST_SOURCE --test-parameter "app_env=TEST_PLATFORM=$TEST_PLATFORM" --token $APP_TOKEN --async

echo "##############################TESTING FINISHED"

