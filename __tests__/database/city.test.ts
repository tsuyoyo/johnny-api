import * as target from "../../src/database/city";
import * as sqlWrapper from "../../src/database/mysqlWrapper";
import { pj } from "johnny-proto";
import proto = pj.sakuchin.percussion.proto;
import dayjs = require("dayjs");
import { johnnyDb } from "../../src/database/fields";
import table = johnnyDb.tables.ADDRESS;

describe("select", () => {
  let runSelectQuery;

  const typedObjects = [
    new proto.City({
      id: "123",
      name: "city1",
      prefecture: proto.Prefecture.TOKYO,
    }),
    new proto.City({
      id: "234",
      name: "city2",
      prefecture: proto.Prefecture.CHIBA,
    }),
    new proto.City({
      id: "345",
      name: "city3",
      prefecture: proto.Prefecture.SAITAMA,
    }),
  ];
  const objects = [
    {
      city_id: "123",
      city_name: "city1",
      prefecture : "TOKYO",
    },
    {
      city_id: "234",
      city_name: "city2",
      prefecture : "CHIBA",
    },
    {
      city_id: "345",
      city_name: "city3",
      prefecture : "SAITAMA",
    },
  ];
  beforeEach(() => {
    runSelectQuery = jest
      .spyOn(sqlWrapper, "runSelectQuery")
      .mockImplementation(
        () => new Promise<Array<object>>((onResolve) => onResolve(objects))
      );
  });

  describe("selectCitiesByPrefecture", () => {
    beforeEach(() => {
      runSelectQuery = jest
        .spyOn(sqlWrapper, "runSelectQuery")
        .mockImplementation(
          () => new Promise<Array<object>>((onResolve) => onResolve(objects))
        );
    });
    it("should pass expected query", () => {
      return target.selectCitiesByPrefecture(proto.Prefecture.TOKYO).then(() => {
        expect(runSelectQuery.mock.calls.length).toBe(1);
        expect(runSelectQuery.mock.calls[0][0]).toBe(
          `SELECT DISTINCT ${table.PREFECTURE}, ${table.CITY_NAME}, ${table.CITY_ID} ` +
          `FROM ${table.TABLE_NAME} ` +
          `WHERE ${table.PREFECTURE}=TOKYO`
        );
      });
    });
    it("should return typed objects", () => {
      return expect(target.selectCitiesByPrefecture(proto.Prefecture.TOKYO))
        .resolves.toMatchObject(typedObjects);
    });
  });

  describe("selectCitiesLikeZipCode", () => {
    beforeEach(() => {
      runSelectQuery = jest
        .spyOn(sqlWrapper, "runSelectQuery")
        .mockImplementation(
          () => new Promise<Array<object>>((onResolve) => onResolve(objects))
        );
    });
    it("should pass expected query", () => {
      const input = "345";
      return target.selectCitiesLikeZipCode(input).then(() => {
        expect(runSelectQuery.mock.calls.length).toBe(1);
        expect(runSelectQuery.mock.calls[0][0]).toBe(
          `SELECT DISTINCT ${table.PREFECTURE}, ${table.CITY_NAME}, ${table.CITY_ID} ` +
          `FROM ${table.TABLE_NAME} ` +
          `WHERE ${table.ZIP_CODE} like '${input}%'`
        );
      });
    });
    it("should return typed objects", () => {
      return expect(target.selectCitiesLikeZipCode("345"))
        .resolves.toMatchObject(typedObjects);
    });
  });

  describe("selectCitiesByZipCode", () => {
    beforeEach(() => {
      runSelectQuery = jest
        .spyOn(sqlWrapper, "runSelectQuery")
        .mockImplementation(
          () => new Promise<Array<object>>((onResolve) => onResolve(objects))
        );
    });
    it("should pass expected query", () => {
      const input = "345";
      return target.selectCitiesByZipCode(input).then(() => {
        expect(runSelectQuery.mock.calls.length).toBe(1);
        expect(runSelectQuery.mock.calls[0][0]).toBe(
          `SELECT DISTINCT ${table.PREFECTURE}, ${table.CITY_NAME}, ${table.CITY_ID} ` +
          `FROM ${table.TABLE_NAME} ` +
          `WHERE ${table.ZIP_CODE}='${input}'`
        );
      });
    });
    it("should return typed objects", () => {
      return expect(target.selectCitiesLikeZipCode("345"))
        .resolves.toMatchObject(typedObjects);
    });
  });

  describe("selectCitiesByIds", () => {
    beforeEach(() => {
      runSelectQuery = jest
        .spyOn(sqlWrapper, "runSelectQuery")
        .mockImplementation(
          () => new Promise<Array<object>>((onResolve) => onResolve(objects))
        );
    });
    it("should pass expected query", () => {
      const input = [10, 20, 30];
      return target.selectCitiesByIds(input).then(() => {
        expect(runSelectQuery.mock.calls.length).toBe(1);
        expect(runSelectQuery.mock.calls[0][0]).toBe(
          `SELECT DISTINCT ${table.PREFECTURE}, ${table.CITY_NAME}, ${table.CITY_ID} ` +
          `FROM ${table.TABLE_NAME} ` +
          `WHERE ${table.CITY_ID} in (10,20,30)`
        );
      });
    });
    it("should return typed objects", () => {
      return expect(target.selectCitiesByIds([10, 20, 30]))
        .resolves.toMatchObject(typedObjects);
    });
  });  

  afterEach(() => {
    jest.clearAllMocks();
  });
});