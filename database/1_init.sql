CREATE DATABASE test_db;

-- Workaround for an issue that 
-- mysql of nodejs has not supported MYSQL 8.0 enough
-- https://qiita.com/monga3/items/6583c07a9b275b469608
ALTER USER 'root' IDENTIFIED WITH mysql_native_password BY 'passpass';

CREATE TABLE test_db.test_table_01 (id int, name varchar(10));

START TRANSACTION;
INSERT INTO test_db.test_table_01 VALUES (100, 'test_a');
INSERT INTO test_db.test_table_01 VALUES (200, 'test_b');
COMMIT;
