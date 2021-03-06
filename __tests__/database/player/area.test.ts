import * as target from "../../../src/database/player/area";
import * as sqlWrapper from "../../../src/database/mysqlWrapper";
import { pj } from "johnny-proto";
import proto = pj.sakuchin.percussion.proto;
import { ApiException } from "../../../src/error/apiException";
import { johnnyDb } from "../../../src/database/fields";
import table = johnnyDb.tables.player.AREA;

describe("insert", () => {
  const areaIds = [1, 2, 3];
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
      return expect(target.insert(playerId, areaIds))
        .resolves
        .toBe(3);
    })
    it("should call insertQuery with expected SQL", () => {
      return target.insert(playerId, areaIds)
        .then((numOfRows: number) => {
          expect(numOfRows).toBe(3)
          expect(runSingleQuery.mock.calls.length).toBe(1);
          expect(runSingleQuery.mock.calls[0][0]).toBe(
            `INSERT INTO ${table.TABLE_NAME} ` +
            `(${table.ID}, ${table.PLAYER_ID}, ${table.AREA_ID}) VALUES ` +
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

  const areaIds = [
    {"area_id": 1},
    {"area_id": 2},
    {"area_id": 3}
  ];
  const playerId = "playerId"

  describe("query is success", () => {
    beforeEach(() => {
      runSelectQuery = jest
        .spyOn(sqlWrapper, "runSelectQuery")
        .mockImplementation(() =>
          new Promise<Array<object>>((onResolve) => onResolve(areaIds))
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

describe("update", () =>{
  let runSingleQueryOnConnection;
  let runSelectQueryOnConnection;
  const playerId = "playerId";

  beforeEach(() => {
    jest.spyOn(sqlWrapper, "queryInTransaction")
      .mockImplementation((callback) => callback({}))
  })

  describe("when some entries should be deleted and new entry should be made", () => {
    const ids = [1, 2, 3];
    const existingIds = [3, 5, 6];
    const selectResults = Array.from(
      existingIds.map(id => Object({ area_id: id }))
    );

    beforeEach(() => {
      runSelectQueryOnConnection = jest
        .spyOn(sqlWrapper, "runSelectQueryOnConnection")
        .mockImplementation(() =>
          new Promise<Array<object>>((onResolve) => onResolve(selectResults))
        )
      runSingleQueryOnConnection = jest
        .spyOn(sqlWrapper, "runSingleQueryOnConnection")
        .mockImplementation(() => Promise.resolve(3))

      jest.spyOn(sqlWrapper, "commitTransaction")
        .mockImplementation(() => Promise.resolve())
    })
    it("should call SQL DB by expected query", () => {
      return target.update(playerId, ids)
        .then(() => {
          expect(runSelectQueryOnConnection.mock.calls.length).toBe(1);
          expect(runSelectQueryOnConnection.mock.calls[0][0]).toBe(
            `SELECT * FROM ${table.TABLE_NAME} WHERE ${table.PLAYER_ID}='${playerId}'`
          );
          expect(runSingleQueryOnConnection.mock.calls.length).toBe(2);
          expect(runSingleQueryOnConnection.mock.calls[0][0]).toBe(
            `DELETE from ${table.TABLE_NAME} WHERE ${table.ID} in (${[5, 6].join(',')})`
          );
          expect(runSingleQueryOnConnection.mock.calls[1][0]).toBe(
            `INSERT INTO ${table.TABLE_NAME} ` +
            `(${table.ID}, ${table.PLAYER_ID}, ${table.AREA_ID}) VALUES ` +
            `(null, '${playerId}', '1'),(null, '${playerId}', '2')`
          );
        })
    })
  })

  describe("when some entries should be deleted and no entry is made", () => {
    const ids = [2];
    const existingIds = [2, 3, 4];
    const selectResults = Array.from(
      existingIds.map(id => Object({ area_id: id }))
    );

    beforeEach(() => {
      runSelectQueryOnConnection = jest
        .spyOn(sqlWrapper, "runSelectQueryOnConnection")
        .mockImplementation(() =>
          new Promise<Array<object>>((onResolve) => onResolve(selectResults))
        )
      runSingleQueryOnConnection = jest
        .spyOn(sqlWrapper, "runSingleQueryOnConnection")
        .mockImplementation(() => Promise.resolve(3))

      jest.spyOn(sqlWrapper, "commitTransaction")
        .mockImplementation(() => Promise.resolve())
    })
    it("should call SQL DB by expected query", () => {
      return target.update(playerId, ids)
        .then(() => {
          expect(runSelectQueryOnConnection.mock.calls.length).toBe(1);
          expect(runSelectQueryOnConnection.mock.calls[0][0]).toBe(
            `SELECT * FROM ${table.TABLE_NAME} WHERE ${table.PLAYER_ID}='${playerId}'`
          );
          expect(runSingleQueryOnConnection.mock.calls.length).toBe(1);
          expect(runSingleQueryOnConnection.mock.calls[0][0]).toBe(
            `DELETE from ${table.TABLE_NAME} WHERE ${table.ID} in (${[3, 4].join(',')})`
          );
        })
    })
  })

  describe("when no entry should be deleted and some entries are made", () => {
    const ids = [2, 3, 4, 5];
    const existingIds = [2, 3];
    const selectResults = Array.from(
      existingIds.map(id => Object({ area_id: id }))
    );

    beforeEach(() => {
      runSelectQueryOnConnection = jest
        .spyOn(sqlWrapper, "runSelectQueryOnConnection")
        .mockImplementation(() =>
          new Promise<Array<object>>((onResolve) => onResolve(selectResults))
        )
      runSingleQueryOnConnection = jest
        .spyOn(sqlWrapper, "runSingleQueryOnConnection")
        .mockImplementation(() => Promise.resolve(3))

      jest.spyOn(sqlWrapper, "commitTransaction")
        .mockImplementation(() => Promise.resolve())
    })
    it("should call SQL DB by expected query", () => {
      return target.update(playerId, ids)
        .then(() => {
          expect(runSelectQueryOnConnection.mock.calls.length).toBe(1);
          expect(runSelectQueryOnConnection.mock.calls[0][0]).toBe(
            `SELECT * FROM ${table.TABLE_NAME} WHERE ${table.PLAYER_ID}='${playerId}'`
          );
          expect(runSingleQueryOnConnection.mock.calls.length).toBe(1);
          expect(runSingleQueryOnConnection.mock.calls[0][0]).toBe(
            `INSERT INTO ${table.TABLE_NAME} ` +
            `(${table.ID}, ${table.PLAYER_ID}, ${table.AREA_ID}) VALUES ` +
            `(null, '${playerId}', '4'),(null, '${playerId}', '5')`
          );
        })
    })
  })

  describe("when neither delete nor insert is not necessary", () => {
    const ids = [2, 3, 4];
    const existingIds = [2, 3, 4];
    const selectResults = Array.from(
      existingIds.map(id => Object({ area_id: id }))
    );

    beforeEach(() => {
      runSelectQueryOnConnection = jest
        .spyOn(sqlWrapper, "runSelectQueryOnConnection")
        .mockImplementation(() =>
          new Promise<Array<object>>((onResolve) => onResolve(selectResults))
        )
      runSingleQueryOnConnection = jest
        .spyOn(sqlWrapper, "runSingleQueryOnConnection")
        .mockImplementation(() => Promise.resolve(3))

      jest.spyOn(sqlWrapper, "commitTransaction")
        .mockImplementation(() => Promise.resolve())
    })
    it("should call SQL DB by expected query", () => {
      return target.update(playerId, ids)
        .then(() => {
          expect(runSelectQueryOnConnection.mock.calls.length).toBe(1);
          expect(runSelectQueryOnConnection.mock.calls[0][0]).toBe(
            `SELECT * FROM ${table.TABLE_NAME} WHERE ${table.PLAYER_ID}='${playerId}'`
          );
          expect(runSingleQueryOnConnection.mock.calls.length).toBe(0);
        })
    })
  })

  afterEach(() => {
    jest.clearAllMocks();
  });
})