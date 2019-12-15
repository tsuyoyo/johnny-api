CREATE DATABASE test_db;

-- Workaround for an issue that
-- mysql of nodejs has not supported MYSQL 8.0 enough
-- https://qiita.com/monga3/items/6583c07a9b275b469608
ALTER USER 'root' IDENTIFIED WITH mysql_native_password BY 'passpass';

CREATE TABLE test_db.test_table_01 (
    id VARCHAR(256) primary key unique,
    name varchar(30),
    photo_url varchar(256),
    mail varchar(100) unique
);

START TRANSACTION;
INSERT INTO test_db.test_table_01 VALUES ('id_a', 'test_a', 'http://photo.com', 'test_a@mail.com');
INSERT INTO test_db.test_table_01 VALUES ('id_b', 'test_b', 'http://photo.com', 'test_b@mail.com');
INSERT INTO test_db.test_table_01 VALUES ('id_c', 'test_c', 'http://photo.com', 'test_c@mail.com');
COMMIT;
