CREATE DATABASE test_db;
CREATE USER 'tsuyogoro' IDENTIFIED WITH mysql_native_password BY 'passpass';
GRANT ALL PRIVILEGES ON test_db.* TO 'tsuyogoro';

CREATE TABLE test_db.test_table_01 (id int, name varchar(10));
INSERT INTO test_db.test_table_01 VALUES (100, 'test_a');
INSERT INTO test_db.test_table_01 VALUES (200, 'test_b');
