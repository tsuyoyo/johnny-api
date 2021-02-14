import * as target from "../../../src/database/player/cities";
import * as sqlWrapper from "../../../src/database/mysqlWrapper";
import { mocked } from "ts-jest/utils";
import { pj } from "johnny-proto";
import proto = pj.sakuchin.percussion.proto;
import { ApiException } from "../../../src/error/apiException";

describe("insertCities", () => {
  let runQuery;
  const cities = [
    new proto.City({ id: "1", name: "city_1"}),
    new proto.City({ id: "2", name: "city_2"}),
    new proto.City({ id: "3", name: "city_3"}),
  ];
  const insertedCities = [{}, {}, {}];
  const playerId = "playerId";

  describe("query is success", () => {
    beforeEach(() => {
      runQuery = jest
        .spyOn(sqlWrapper, "runQuery")
        .mockImplementation((query, onQueryDone) => onQueryDone(null, insertedCities, null));
    });
    it("should return the number of inserted cities", () => {
      return expect(target.insertCities(playerId, cities))
        .resolves
        .toBe(3)
    })

    it("should call insertQuery with expected SQL", () => {
      return target.insertCities(playerId, cities)
        .then((numOfRows: number) => {
          expect(numOfRows).toBe(3)
          expect(runQuery.mock.calls.length).toBe(1);
          expect(runQuery.mock.calls[0][0]).toBe(
            "INSERT INTO user_cities (id, user_id, city_id) VALUES " +
            "(null, 'playerId', '1'),(null, 'playerId', '2'),(null, 'playerId', '3')"
          );
        });
    });
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

})

describe("deleteCities", () => {
  let runQuery;

  describe("query is success", () => {
    const deletedEntries = [{}, {}, {}] // 3 rows are deleted

    beforeEach(() => {
      runQuery = jest
        .spyOn(sqlWrapper, "runQuery")
        .mockImplementation((query, onQueryDone) =>
          onQueryDone(null, deletedEntries, null)
        );
    });
    it("should return the number of deleted entry", () => {
      return expect(target.deleteCities("id"))
        .resolves
        .toBe(deletedEntries.length)
    });
    it("should call insertQuery with expected SQL", () => {
      return target.deleteCities("id").then((rows: number) => {
        expect(runQuery.mock.calls.length).toBe(1);
        expect(runQuery.mock.calls[0][0]).toBe(
          "DELETE from user_cities WHERE user_id='id'"
        );
      })
    });
  });

  describe("query is faild", () => {
    const error = new ApiException(proto.PercussionApiError.ErrorCode.DB_ERROR, "", 500);

    beforeEach(() => {
      runQuery = jest
        .spyOn(sqlWrapper, "runQuery")
        .mockImplementation((query, onQueryDone) =>
          onQueryDone(error, null, null)
        );
    });
    it("should return the number of deleted entry", () => {
      return expect(target.deleteCities("id"))
        .rejects
        .toMatchObject(error)
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});

describe("selectCities", () => {
  let runQuery;
  const cityIds = [{"city_id": 1}, {"city_id": 2}, {"city_id": 3}];
  const playerId = "playerId"

  describe("query is success", () => {
    beforeEach(() => {
      runQuery = jest
        .spyOn(sqlWrapper, "runQuery")
        .mockImplementation((query, onQueryDone) =>
          onQueryDone(null, cityIds, null)
        );
    });
    it("should return city IDs found in DB", () => {
      return expect(target.selectCities(playerId))
        .resolves
        .toMatchObject([1, 2, 3]);
    });
    it("should call runQuery with expected SQL", () => {
      return target.selectCities(playerId)
        .then((cityIds: Array<number>) => {
          expect(runQuery.mock.calls.length).toBe(1);
          expect(runQuery.mock.calls[0][0]).toBe(
            "SELECT * FROM user_cities WHERE user_id='playerId'"
          );
        });
    });
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
});