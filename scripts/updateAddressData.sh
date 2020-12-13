#!/bin/sh
docker-compose up --build address-data-generator 
cp address/src/output/2_address.sql database/
docker rm address-data-generator