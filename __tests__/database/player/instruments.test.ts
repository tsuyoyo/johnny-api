import * as target from "../../../src/database/player/instrument";
import * as sqlWrapper from "../../../src/database/mysqlWrapper";
import { pj } from "johnny-proto";
import proto = pj.sakuchin.percussion.proto;
import { ApiException } from "../../../src/error/apiException";

import { johnnyDb } from "../../../src/database/fields";
import table = johnnyDb.tables.player.INSTRUMENT;

describe("insert", () => {
  const instrumentIds = [1, 2, 3];
  const playerId = "playerId";

  describe("query is success", () => {
    let runSingleQuery;
    const inserted = [{}, {}, {}];

    beforeEach(() => {
      runSingleQuery = jest
        .spyOn(sqlWrapper, "runSingleQuery")
        .mockImplementation(() => 
          new Promise<number>((onResolve) => onResolve(inserted.length))
        );
    });
    it("should return the number of inserted entries", () => {
      return expect(target.insert(playerId, instrumentIds))
        .resolves
        .toBe(3);
    })
    it("should call insertQuery with expected SQL", () => {
      return target.insert(playerId, instrumentIds)
        .then((numOfRows: number) => {
          expect(numOfRows).toBe(3)
          expect(runSingleQuery.mock.calls.length).toBe(1);
          expect(runSingleQuery.mock.calls[0][0]).toBe(
            `INSERT INTO ${table.TABLE_NAME} ` + 
            `(${table.ID}, ${table.PLAYER_ID}, ${table.INSTRUMENT_ID}) VALUES ` +
            `(null, '${playerId}', '1'),(null, '${playerId}', '2'),(null, '${playerId}', '3')`
          );
        });
    });
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
})

describe("deleteEntries", () => {
  let runSingleQuery;

  describe("query is success", () => {
    const deletedEntries = [{}, {}, {}] // 3 rows are deleted

    beforeEach(() => {
      runSingleQuery = jest
        .spyOn(sqlWrapper, "runSingleQuery")
        .mockImplementation(() => 
          new Promise<number>((onResolve) => onResolve(deletedEntries.length))
        );
    });
    it("should return the number of deleted entry", () => {
      return expect(target.deleteEntries("id"))
        .resolves
        .toBe(deletedEntries.length)
    });
    it("should call insertQuery with expected SQL", () => {
      return target.deleteEntries("id").then((rows: number) => {
        expect(runSingleQuery.mock.calls.length).toBe(1);
        expect(runSingleQuery.mock.calls[0][0]).toBe(
          `DELETE from ${table.TABLE_NAME} WHERE ${table.PLAYER_ID}='id'`
        );
      })
    });
  });

  describe("query is faild", () => {
    const error = new ApiException(proto.PercussionApiError.ErrorCode.DB_ERROR, "", 500);

    beforeEach(() => {
      runSingleQuery = jest
        .spyOn(sqlWrapper, "runSingleQuery")
        .mockImplementation(() => 
          new Promise<number>((_onResolve, onReject) => onReject(error))
        );
    });
    it("should return the number of deleted entry", () => {
      return expect(target.deleteEntries("id"))
        .rejects
        .toMatchObject(error)
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});

describe("select", () => {
  let runSelectQuery;

  const instrumentIds = [
    {"instrument_id": 1},
    {"instrument_id": 2},
    {"instrument_id": 3}
  ];
  const playerId = "playerId"

  describe("query is success", () => {
    beforeEach(() => {
      runSelectQuery = jest
        .spyOn(sqlWrapper, "runSelectQuery")
        .mockImplementation(() =>
          new Promise<Array<object>>((onResolve) => onResolve(instrumentIds))
        );
    });
    it("should return city IDs found in DB", () => {
      return expect(target.select(playerId))
        .resolves
        .toMatchObject([1, 2, 3]);
    });
    it("should call runQuery with expected SQL", () => {
      return target.select(playerId)
        .then((ids: Array<number>) => {
          expect(ids.length).toBe(3)
          expect(runSelectQuery.mock.calls.length).toBe(1);
          expect(runSelectQuery.mock.calls[0][0]).toBe(
            `SELECT * FROM ${table.TABLE_NAME} WHERE ${table.PLAYER_ID}='${playerId}'`
          );
        });
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});