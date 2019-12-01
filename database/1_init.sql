CREATE DATABASE test_db;

-- Workaround for an issue that 
-- mysql of nodejs has not supported MYSQL 8.0 enough
-- https://qiita.com/monga3/items/6583c07a9b275b469608
ALTER USER 'root' IDENTIFIED WITH mysql_native_password BY 'passpass';

CREATE TABLE test_db.test_table_01 (
    id int auto_increment primary key,
    name varchar(30) unique,
    mail varchar(100) unique
) auto_increment = 10000;

START TRANSACTION;
INSERT INTO test_db.test_table_01 VALUES (null, 'test_a', 'test_a@mail.com');
INSERT INTO test_db.test_table_01 VALUES (null, 'test_b', 'test_b@mail.com');
INSERT INTO test_db.test_table_01 VALUES (null, 'test_c', 'test_c@mail.com');
COMMIT;
