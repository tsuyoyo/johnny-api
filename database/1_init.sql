CREATE DATABASE test_db;

-- Workaround for an issue that
-- mysql of nodejs has not supported MYSQL 8.0 enough
-- https://qiita.com/monga3/items/6583c07a9b275b469608
ALTER USER "root" IDENTIFIED WITH mysql_native_password BY 'passpass';

-- ************************
-- User related tables
--
CREATE TABLE test_db.users (
    id VARCHAR(256) primary key unique not null,
    name varchar(30) not null,
    photo_url varchar(256),
    mail varchar(100) unique
);
START TRANSACTION;
INSERT INTO test_db.users VALUES ('id_a', N'あああああ', 'http://photo.com', 'test_a@mail.com');
INSERT INTO test_db.users VALUES ('id_b', 'test_b', 'http://photo.com', 'test_b@mail.com');
INSERT INTO test_db.users VALUES ('id_c', 'test_c', 'http://photo.com', 'test_c@mail.com');
COMMIT;

-- ************************
-- Area is expected to be used to bind a lot of information.
-- (Which area the studio is, Which area the player often visit...etc)
--
CREATE TABLE test_db.areas (
    id INT primary key AUTO_INCREMENT,
    name VARCHAR(30) unique not null,
    prefecture INT not null
 ) AUTO_INCREMENT = 100;
START TRANSACTION;
INSERT INTO test_db.areas VALUE (50, N'渋谷', 13);
INSERT INTO test_db.areas VALUE (null, N'新宿', 13);
INSERT INTO test_db.areas VALUE (null, N'池袋', 13);
INSERT INTO test_db.areas VALUE (60, N'市川', 12);
INSERT INTO test_db.areas VALUE (null, N'本八幡', 12);
COMMIT;

-- (Note : to prevent adding duplicated activity area)
-- ALTER TABLE `table` ADD UNIQUE (
-- `a` ,
-- `b` ,
-- `c`
-- );
CREATE TABLE test_db.user_cities (
    id INT primary key AUTO_INCREMENT,
    user_id VARCHAR(256) not null,
    city_id VARCHAR(16) not null
 ) AUTO_INCREMENT = 1;
START TRANSACTION;
INSERT INTO test_db.user_cities(user_id, city_id) VALUE ('id_a', '50');
INSERT INTO test_db.user_cities(user_id, city_id) VALUE ('id_a', '60');
COMMIT;

-- ************************
-- Studio related tables
--
CREATE TABLE test_db.studios (
    id INT primary key AUTO_INCREMENT,
    name VARCHAR(30) unique not null
) AUTO_INCREMENT = 100;
START TRANSACTION;
INSERT INTO test_db.studios VALUE (1, 'studio A');
INSERT INTO test_db.studios VALUE (null, 'スタジオ B');
INSERT INTO test_db.studios VALUE (null, 'studio C');
INSERT INTO test_db.studios VALUE (null, 'studio D');
INSERT INTO test_db.studios VALUE (20, 'スタジオ E');
INSERT INTO test_db.studios VALUE (null, 'studio F');
COMMIT;

-- Table to map "studio" and "area".
-- One studio can be specified by multiple areas (like "Shibuya")
CREATE TABLE test_db.studio_areas (
    studio_id INT,
    area_id INT
);
START TRANSACTION;
INSERT INTO test_db.studio_areas VALUE (1, 50);
INSERT INTO test_db.studio_areas VALUE (20, 60);
COMMIT;

CREATE TABLE test_db.studio_ratings (
    studio_id INT,
    rating INT not null,
    comment VARCHAR(1000),
    user_id VARCHAR(256)
);
