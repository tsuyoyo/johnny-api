CREATE DATABASE test_db;

-- Workaround for an issue that
-- mysql of nodejs has not supported MYSQL 8.0 enough
-- https://qiita.com/monga3/items/6583c07a9b275b469608
ALTER USER "root" IDENTIFIED WITH mysql_native_password BY 'passpass';

CREATE TABLE test_db.player (
    id VARCHAR(256) primary key unique not null,
    name varchar(30) not null,
    icon varchar(256),
    mail varchar(100) unique,
    introduction VARCHAR(1000),
    registered_date_time DATETIME not null,
    updated_date_time DATETIME not null
);

CREATE TABLE test_db.area (
    id INT primary key AUTO_INCREMENT,
    name VARCHAR(30) unique not null,
    prefecture INT not null,
    registered_date_time DATETIME not null
) AUTO_INCREMENT = 100;

CREATE TABLE test_db.instrument (
    id INT primary key AUTO_INCREMENT,
    name VARCHAR(30) unique not null,
    author_id VARCHAR(256) not null,
    registered_date_time DATETIME not null
) AUTO_INCREMENT = 1;

CREATE TABLE test_db.instrument_image (
    id INT primary key AUTO_INCREMENT,
    instrument_id INT,
    url varchar(256),
    posted_date_time DATETIME not null
) AUTO_INCREMENT = 1;

CREATE TABLE test_db.studio (
    id INT primary key AUTO_INCREMENT,
    name VARCHAR(30) unique not null,
    area_id INT not null,
    registered_date_time DATETIME not null
) AUTO_INCREMENT = 100;

CREATE TABLE test_db.studio_image (
    id INT primary key AUTO_INCREMENT,
    studio_id INT,
    url varchar(256),
    posted_date_time DATETIME not null
) AUTO_INCREMENT = 1;

CREATE TABLE test_db.studio_rating (
    id INT primary key AUTO_INCREMENT,
    studio_id INT,
    rating INT not null,
    comment VARCHAR(1000),
    player_id VARCHAR(256),
    posted_date_time DATETIME not null
) AUTO_INCREMENT = 1;

CREATE TABLE test_db.follow (
    id INT primary key AUTO_INCREMENT,
    player_id VARCHAR(256),
    following_player_id VARCHAR(256),
    follow_since_date_time DATETIME not null
) AUTO_INCREMENT = 100;

CREATE TABLE test_db.player_area (
    id BIGINT primary key AUTO_INCREMENT,
    player_id VARCHAR(256) not null,
    area_id INT not null,
    updated_date_time DATETIME not null
) AUTO_INCREMENT = 1;

CREATE TABLE test_db.player_instrument (
    id BIGINT primary key AUTO_INCREMENT,
    player_id VARCHAR(256) not null,
    instrument_id INT not null,
    updated_date_time DATETIME not null
) AUTO_INCREMENT = 1;

CREATE TABLE test_db.player_studio (
    id BIGINT primary key AUTO_INCREMENT,
    player_id VARCHAR(256) not null,
    studio_id INT not null,
    updated_date_time DATETIME not null
) AUTO_INCREMENT = 1;


START TRANSACTION;
INSERT INTO test_db.player
  (id, name, icon, mail, registered_date_time, updated_date_time)
VALUES
  ('id_a', 'あああああ', 'http://photo.com', 'test_a@mail.com', '2020-02-22 10:00:00', '2020-02-22 10:00:00'),
  ('id_b', 'test_b', 'http://photo.com', 'test_b@mail.com', '2020-02-22 10:10:00', '2020-02-22 10:10:00'),
  ('id_c', 'test_c', 'http://photo.com', 'test_c@mail.com', '2020-02-22 11:25:00', '2020-02-22 11:25:00');
COMMIT;

-- START TRANSACTION;
-- INSERT INTO test_db.areas VALUE (50, '渋谷', 13);
-- INSERT INTO test_db.areas VALUE (null, '新宿', 13);
-- INSERT INTO test_db.areas VALUE (null, '池袋', 13);
-- INSERT INTO test_db.areas VALUE (60, '市川', 12);
-- INSERT INTO test_db.areas VALUE (null, '本八幡', 12);
-- COMMIT;

-- -- (Note : to prevent adding duplicated activity area)
-- -- ALTER TABLE `table` ADD UNIQUE (
-- -- `a` ,
-- -- `b` ,
-- -- `c`
-- -- );

-- START TRANSACTION;
-- INSERT INTO test_db.user_cities(user_id, city_id) VALUE ('id_a', '50');
-- INSERT INTO test_db.user_cities(user_id, city_id) VALUE ('id_a', '60');
-- COMMIT;

-- START TRANSACTION;
-- INSERT INTO test_db.studios VALUE (1, 'studio A');
-- INSERT INTO test_db.studios VALUE (null, 'スタジオ B');
-- INSERT INTO test_db.studios VALUE (null, 'studio C');
-- INSERT INTO test_db.studios VALUE (null, 'studio D');
-- INSERT INTO test_db.studios VALUE (20, 'スタジオ E');
-- INSERT INTO test_db.studios VALUE (null, 'studio F');
-- COMMIT;

