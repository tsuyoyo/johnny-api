/* eslint @typescript-eslint/camelcase: 0 */
import * as target from "../../src/database/instrument";
import * as sqlWrapper from "../../src/database/mysqlWrapper";
import { pj } from "johnny-proto";
import proto = pj.sakuchin.percussion.proto;
import dayjs = require("dayjs");
import { johnnyDb } from "../../src/database/fields";
import table = johnnyDb.tables.INSTRUMENT;

describe("insert", () => {
  let runSingleQuery;
  const playerId = "playerId";
  const instrumentName = "guiter";
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
    return target.insert(instrumentName, playerId, date).then(() => {
      expect(runSingleQuery.mock.calls.length).toBe(1);
      expect(runSingleQuery.mock.calls[0][0]).toBe(
        `INSERT INTO ${table.TABLE_NAME} ` +
          `(` +
          `${table.ID},` +
          `${table.NAME},` +
          `${table.AUTHOR_ID},` +
          `${table.REGISTERED_DATE_TIME}` +
          `) ` +
          `VALUES ` +
          `(` +
          `'null,` +
          `'${instrumentName},` +
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

  describe("selectById", () => {
    const instrumentId = 100;
    const typedObject = new proto.Instrument({
      id: 1,
      name: "name_1",
      authorId: "author_1",
    });
    const objects = [
      {
        id: 1,
        name: "name_1",
        author_id: "author_1",
      },
    ];

    beforeEach(() => {
      runSelectQuery = jest
        .spyOn(sqlWrapper, "runSelectQuery")
        .mockImplementation(
          () => new Promise<Array<object>>((onResolve) => onResolve(objects))
        );
    });
    it("should pass expected query", () => {
      return target.selectById(instrumentId).then(() => {
        expect(runSelectQuery.mock.calls.length).toBe(1);
        expect(runSelectQuery.mock.calls[0][0]).toBe(
          `SELECT * FROM ${table.TABLE_NAME} WHERE ${table.ID}=${instrumentId}`
        );
      });
    });
    it("should return typed objects", () => {
      return expect(target.selectById(instrumentId)).resolves.toMatchObject(
        typedObject
      );
    });
  });

  describe("selectByIds", () => {
    const instrumentIds = [100, 200, 300];
    const typedObjects = [
      new proto.Instrument({
        id: 1,
        name: "name_1",
        authorId: "author_1",
      }),
      new proto.Instrument({
        id: 2,
        name: "name_2",
        authorId: "author_2",
      }),
      new proto.Instrument({
        id: 3,
        name: "name_3",
        authorId: "author_3",
      }),
    ];
    const objects = [
      {
        id: 1,
        name: "name_1",
        author_id: "author_1",
      },
      {
        id: 2,
        name: "name_2",
        author_id: "author_2",
      },
      {
        id: 3,
        name: "name_3",
        author_id: "author_3",
      },
    ];
    beforeEach(() => {
      runSelectQuery = jest
        .spyOn(sqlWrapper, "runSelectQuery")
        .mockImplementation(
          () => new Promise<Array<object>>((onResolve) => onResolve(objects))
        );
    });
    it("should pass expected query", () => {
      return target.selectByIds(instrumentIds).then(() => {
        let query = `SELECT * FROM ${table.TABLE_NAME} WHERE ${table.ID} in (`;
        for (let i = 0; i < instrumentIds.length; i++) {
          query +=
            `'${instrumentIds[i]}'` + (i < instrumentIds.length - 1 ? "," : "");
        }
        query += ")";

        expect(runSelectQuery.mock.calls.length).toBe(1);
        expect(runSelectQuery.mock.calls[0][0]).toBe(query);
      });
    });
    it("should return typed objects", () => {
      return expect(target.selectByIds(instrumentIds)).resolves.toMatchObject(
        typedObjects
      );
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});

describe("update", () => {
  let runSingleQuery;
  const instrumentId = 1;
  const instrumentName = "guiter";

  beforeEach(() => {
    runSingleQuery = jest
      .spyOn(sqlWrapper, "runSingleQuery")
      .mockImplementation(
        () => new Promise<number>((onResolve) => onResolve(3))
      );
  });
  it("should pass expected query", () => {
    const query =
      `UPDATE ${table.TABLE_NAME} ` +
      `SET ${table.NAME}=${instrumentName} ` +
      `WHERE ${table.ID}=${instrumentId}`;

    return target.update(instrumentId, instrumentName).then(() => {
      expect(runSingleQuery.mock.calls.length).toBe(1);
      expect(runSingleQuery.mock.calls[0][0]).toBe(query);
    });
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
});

describe("delete", () => {
  let runSingleQuery;
  const instrumentId = 1;

  beforeEach(() => {
    runSingleQuery = jest
      .spyOn(sqlWrapper, "runSingleQuery")
      .mockImplementation(
        () => new Promise<number>((onResolve) => onResolve(3))
      );
  });
  it("should pass expected query", () => {
    const query = `DELETE WHERE ${table.ID}=${instrumentId}`;

    return target.deleteEntry(instrumentId).then(() => {
      expect(runSingleQuery.mock.calls.length).toBe(1);
      expect(runSingleQuery.mock.calls[0][0]).toBe(query);
    });
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
});
