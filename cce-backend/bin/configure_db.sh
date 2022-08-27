#!/bin/bash


echo "Configuring myburgerdb"

dropdb -U node_user myburgerdb
createdb -U node_user myburgerdb

psql -U node_user myburgerdb < ./bin/sql/account.sql
# account.sql ni SQl busad ni NOSQL !!
psql -U node_user myburgerdb < ./bin/sql/ingredients.sql
psql -U node_user myburgerdb < ./bin/sql/orders.sql

echo "myburgerdb configured"