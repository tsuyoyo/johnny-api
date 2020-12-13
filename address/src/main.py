# -*- coding: utf-8 -*-
import requests
import os
import shutil
from datetime import datetime
import zipfile
import csv
import field
import query
import sys

TABLE_NAME = 'ad_address'

def downloadFile(url, downloadDir):
    os.makedirs(downloadDir, exist_ok=True)

    response = requests.get(url)
    pathes = url.split('/')
    fileName = pathes[len(pathes) - 1]

    saveFileName = fileName
    saveFilePath = os.path.join(downloadDir, saveFileName)

    with open(saveFilePath, 'wb') as saveFile:
        saveFile.write(response.content)
    return saveFilePath

def extractZipFile(filePath, extractDir):
    with zipfile.ZipFile(filePath) as zf:
        zf.extractall(extractDir)
        return '{}/{}'.format(extractDir, zf.namelist()[0])

def parseCsv(csvFileName):
    # Ref of cp932 --> https://qiita.com/kasei-san/items/cfb993786153231e5413
    with open('./{}'.format(csvFileName), encoding='cp932') as csvFile:
        reader = csv.reader(csvFile)
        data = [row for row in reader]

    prefectureCodeIndex = data[0].index(field.PREFECTURE_CODE)
    cityCodeIndex = data[0].index(field.CITY_CODE)
    cityNameIndex = data[0].index(field.CITY_NAME)

    def getAddressValues(entry):
        return (entry[cityCodeIndex], entry[cityNameIndex], entry[prefectureCodeIndex])

    return set(list(map(getAddressValues, data[1:])))

def writeSqlFile(dataEntries, dbName, tableName, path, fileName):
    os.makedirs(path, exist_ok=True)
    with open(os.path.join(path, fileName), 'w') as sqlFile:
        sqlFile.write(query.dropTableIfExists(dbName, tableName))
        sqlFile.write(query.createTable(dbName, tableName))
        sqlFile.write(query.insertInto(dbName, tableName))
        for index, entry in enumerate(dataEntries):
            sqlFile.write("  {}".format(query.value(entry[0], entry[1], entry[2])))
            if (index == len(dataEntries) - 1):
                sqlFile.write(";\n")
            else:
                sqlFile.write(",\n")

def main():
    DOWNLOAD_SAVE_DIR = "./tmp"

    dbName = os.environ.get('DB_NAME', None)
    if dbName is None:
        print("No DB name is specified")
        sys.exit()

    filePath = downloadFile("http://jusyo.jp/downloads/new/csv/csv_zenkoku.zip", DOWNLOAD_SAVE_DIR)
    csvFile = extractZipFile(filePath, DOWNLOAD_SAVE_DIR)
    entries = parseCsv(csvFile)
    writeSqlFile(entries, dbName, TABLE_NAME, "./output", "2_address.sql")

    shutil.rmtree(DOWNLOAD_SAVE_DIR)

if __name__ == "__main__":
    main()

