/* eslint @typescript-eslint/camelcase: 0 */
import * as target from "../../../src/database/instrument/history";
import * as sqlWrapper from "../../../src/database/mysqlWrapper";
import dayjs = require("dayjs");
import { johnnyDb } from "../../../src/database/fields";
import table = johnnyDb.tables.instrument.HISTORY;

describe("insert", () => {
  let runSingleQuery;

  const instrumentId = 123;
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
    return target.insert(instrumentId, playerId, date).then(() => {
      expect(runSingleQuery.mock.calls.length).toBe(1);
      expect(runSingleQuery.mock.calls[0][0]).toBe(
        `INSERT INTO ${table.TABLE_NAME} ` +
        `(` +
        `${table.ID},` +
        `${table.INSTRUMENT_ID},` +
        `${table.PLAYER_ID},` +
        `${table.UPDATED_DATE_TIME}` +
        `) ` +
        `VALUES ` +
        `(` +
        `'null,` +
        `'${instrumentId},` +
        `'${playerId},` +
        `'${formatDate},` +
        `)`
      );
    });
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
});

describe("select", () => {
  let runSelectQuery;

  const typedObjects = [
    new target.InstrumentEditHistory(
      123,
      dayjs("2020-03-05 19:30:55").toDate(),
    ),
    new target.InstrumentEditHistory(
      234,
      dayjs("2020-12-31 23:59:55").toDate(),
    ),
  ];
  const objects = [
    {
      id: 1,
      player_id: 123,
      updated_date_time: "2020-03-05 19:30:55",
    },
    {
      id: 2,
      player_id: 234,
      updated_date_time: "2020-12-31 23:59:55",
    },
  ];

  describe("selectByPlayerId", () => {
    const playerId = 100;

    beforeEach(() => {
      runSelectQuery = jest
        .spyOn(sqlWrapper, "runSelectQuery")
        .mockImplementation(
          () => new Promise<Array<object>>((onResolve) => onResolve(objects))
        );
    });
    it("should pass expected query", () => {
      return target.selectByPlayerId(playerId).then(() => {
        expect(runSelectQuery.mock.calls.length).toBe(1);
        expect(runSelectQuery.mock.calls[0][0]).toBe(
          `SELECT * FROM ${table.TABLE_NAME} WHERE ${table.PLAYER_ID}=${playerId}`
        );
      });
    });
    it("should return typed objects", () => {
      return expect(target.selectByPlayerId(playerId)).resolves.toMatchObject(
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
          `SELECT * FROM ${table.TABLE_NAME} WHERE ${table.INSTRUMENT_ID}=${instrumentId}`
        );
      });
    });
    it("should return typed objects", () => {
      return expect(target.selectByInstrumentId(instrumentId)).resolves.toMatchObject(
        typedObjects.sort((a, b) => b.date.getMilliseconds() - a.date.getMilliseconds())
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
    const query = `DELETE WHERE ${table.ID}=${id}`;

    return target.deleteEntry(id).then(() => {
      expect(runSingleQuery.mock.calls.length).toBe(1);
      expect(runSingleQuery.mock.calls[0][0]).toBe(query);
    });
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
});
