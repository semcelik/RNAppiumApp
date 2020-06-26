#!/usr/bin/env bash

echo "##############################POST BUILD TESTING STARTED"
echo "APPCENTER_SOURCE_DIRECTORY: $APPCENTER_SOURCE_DIRECTORY" #/Users/runner/runners/2.170.1/work/1/s
echo "APPCENTER_OUTPUT_DIRECTORY: $APPCENTER_OUTPUT_DIRECTORY" #/Users/runner/runners/2.170.1/work/1/a/build
ls $APPCENTER_OUTPUT_DIRECTORY

echo "TEST_PLATFORM: $TEST_PLATFORM"

if [ $TEST_PLATFORM == "android" ];
then
  APP="s.celikk08-gmail.com/rnandroid"
  DEVICES="b4bd15f4"
  TEST_SERIES="master"
  APP_PATH=$APPCENTER_OUTPUT_DIRECTORY/*.apk
elif [ $TEST_PLATFORM == "ios" ]
then
  APP="s.celikk08-gmail.com/rnios"
  DEVICES="s.celikk08-gmail.com/test"
  TEST_SERIES="master"
  APP_PATH=$APPCENTER_OUTPUT_DIRECTORY/*.ipa # need to build with app sign for this
else
  echo "PLATFORM not found. it should be 'ios' or 'android'"
  exit 0
fi

git clone --single-branch https://github.com/semcelik/appium-java-playground.git

E2E_PATH=appium-java-playground
TEST_SOURCE=$APPCENTER_SOURCE_DIRECTORY/$E2E_PATH/target/upload


echo "APP: $APP"
echo "DEVICES: $DEVICES"
echo "TEST_SERIES: $TEST_SERIES"
echo "APP_PATH: $APP_PATH"


cd $E2E_PATH
sh generate-test-sources.sh $TEST_PLATFORM
cd ..

appcenter test run appium --app $APP --devices $DEVICES --app-path $APP_PATH --test-series $TEST_SERIES --locale "en_US" --build-dir $TEST_SOURCE --token $APP_TOKEN --async

echo "##############################TESTING FINISHED"

