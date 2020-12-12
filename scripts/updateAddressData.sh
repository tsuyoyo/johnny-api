#!/bin/sh
docker-compose up --build johnny-address-data-generator 
cp address/src/output/2_address.sql database/