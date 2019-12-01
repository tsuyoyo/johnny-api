#!/bin/sh
echo 'stop containers'
docker stop test-db test-api-server

echo 'rm containers'
docker rm test-db test-api-server