#!/bin/sh
if [ -z "$TEST_NETWORK_NAME" ]; then
  echo "Need to export TEST_NETWORK_NAME before hands"
  exit 0
fi

echo -------------
echo Create network - $TEST_NETWORK_NAME
docker network create $TEST_NETWORK_NAME

echo -------------
echo Confirm network is created
networkConfirmResult=`docker network ls | grep db-connection-test`
if [ -n "$networkConfirmResult" ]; then
  echo Created!! 
  echo $networkConfirmResult
else
  echo failed to create network - $TEST_NETWORK_NAME
fi