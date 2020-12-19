def dropTableIfExists(dbName, tableName):
  return "DROP TABLE IF EXISTS {}.{};".format(dbName,tableName)

def createTable(dbName, tableName):
  return """
CREATE TABLE {}.{} (
  `city_id` INT(5) unique not null,
  `city_name` VARCHAR(30),
  `prefecture_id` INT not null,
  `zip_code` VARCHAR(7),
  primary key (`city_id`)
) DEFAULT CHARSET=utf8;""".format(dbName,tableName)

def insertInto(dbName, tableName):
  return """
INSERT INTO {}.{}(`city_id`, `city_name`, `prefecture_id`, `zip_code`)
VALUES
""".format(dbName,tableName)

def value(city_id, city_name, ken_id, zip_code):
  return "({}, \"{}\", {}, \"{}\")".format(city_id, city_name, ken_id, zip_code)