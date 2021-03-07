/* eslint @typescript-eslint/camelcase: 0 */
import * as target from "../../../src/database/instrument/image";
import * as sqlWrapper from "../../../src/database/mysqlWrapper";
import dayjs = require("dayjs");
import { johnnyDb } from "../../../src/database/fields";
import table = johnnyDb.tables.instrument.IMAGE;

describe("insert", () => {
  let runSingleQuery;

  const instrumentId = 123;
  const url = "http://image.com"
  const playerId = "playerId";
  const date = new Date();

  beforeEach(() => {
    runSingleQuery = jest
      .spyOn(sqlWrapper, "runSingleQuery")
      .mockImplementation(
        () => new Promise<number>((onResolve) => onResolve(3))
      );
  });
  it("should pass expected query", () => {
    const formatDate = dayjs(date).format(johnnyDb.DATE_TIME_FORMAT);
    return target.insert(instrumentId, url, playerId, date).then(() => {
      expect(runSingleQuery.mock.calls.length).toBe(1);
      expect(runSingleQuery.mock.calls[0][0]).toBe(
        `INSERT INTO ${table.TABLE_NAME} ` +
        `(` +
        `${table.ID},` +
        `${table.URL},` +
        `${table.INSTRUMENT_ID},` +
        `${table.AUTHOR_ID},` +
        `${table.POSTED_DATE_TIME}` +
        `) ` +
        `VALUES (null,?,?,?,?)`
      );
      expect(runSingleQuery.mock.calls[0][1])
        .toEqual([url, instrumentId, playerId, formatDate])
    });
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
});

describe("select", () => {
  let runSelectQuery;

  const typedObjects = [
    new target.InstrumentImage(
      "http://image01.com",
      123,
      dayjs("2020-03-05 19:30:55").toDate(),
    ),
  ];
  const objects = [
    {
      id: 1,
      url: "http://image01.com",
      author_id: 123,
      posted_date_time: "2020-03-05 19:30:55",
    },
  ];

  describe("selectByAuthorId", () => {
    const authorId = 100;

    beforeEach(() => {
      runSelectQuery = jest
        .spyOn(sqlWrapper, "runSelectQuery")
        .mockImplementation(
          () => new Promise<Array<object>>((onResolve) => onResolve(objects))
        );
    });
    it("should pass expected query", () => {
      return target.selectByAuthorId(authorId).then(() => {
        expect(runSelectQuery.mock.calls.length).toBe(1);
        expect(runSelectQuery.mock.calls[0][0]).toBe(
          `SELECT * FROM ${table.TABLE_NAME} WHERE ${table.AUTHOR_ID}=?`
        );
        expect(runSelectQuery.mock.calls[0][1]).toEqual([authorId]);
      });
    });
    it("should return typed objects", () => {
      return expect(target.selectByAuthorId(authorId)).resolves.toMatchObject(
        typedObjects
      );
    });
  });

  describe("selectByInstrumentId", () => {
    const instrumentId = 100;

    beforeEach(() => {
      runSelectQuery = jest
        .spyOn(sqlWrapper, "runSelectQuery")
        .mockImplementation(
          () => new Promise<Array<object>>((onResolve) => onResolve(objects))
        );
    });
    it("should pass expected query", () => {
      return target.selectByInstrumentId(instrumentId).then(() => {
        expect(runSelectQuery.mock.calls.length).toBe(1);
        expect(runSelectQuery.mock.calls[0][0]).toBe(
          `SELECT * FROM ${table.TABLE_NAME} WHERE ${table.INSTRUMENT_ID}=?`
        );
        expect(runSelectQuery.mock.calls[0][1]).toEqual([instrumentId]);
      });
    });
    it("should return typed objects", () => {
      return expect(target.selectByInstrumentId(instrumentId)).resolves.toMatchObject(
        typedObjects
      );
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});

describe("delete", () => {
  let runSingleQuery;
  const id = 1;

  beforeEach(() => {
    runSingleQuery = jest
      .spyOn(sqlWrapper, "runSingleQuery")
      .mockImplementation(
        () => new Promise<number>((onResolve) => onResolve(3))
      );
  });
  it("should pass expected query", () => {
    const query = `DELETE WHERE ${table.ID}=?`;

    return target.deleteEntry(id).then(() => {
      expect(runSingleQuery.mock.calls.length).toBe(1);
      expect(runSingleQuery.mock.calls[0][0]).toBe(query);
      expect(runSingleQuery.mock.calls[0][1]).toEqual([id]);
    });
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
});
