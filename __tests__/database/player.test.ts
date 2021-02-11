
import * as playerDb from "../../src/database/player";
import * as sqlWrapper from "../../src/database/mysqlWrapper";
import { mocked } from 'ts-jest/utils'
import { pj } from "johnny-proto";
import proto = pj.sakuchin.percussion.proto;

describe("insertPlayer", () => {
    let runQuery;
    const player = new proto.Player({
        id: "id",
        name: "name",
        icon: "icon",
    });
    describe("query is success", () => {
        beforeEach(() => {
            runQuery = jest.spyOn(sqlWrapper, 'runQuery')
                .mockImplementation(
                    (query, onQueryDone) => onQueryDone(null, null, null)
                );
            // Verify it's called once.
            expect(playerDb.insertPlayer(player, "mail")).resolves
        })
        it("should call insertQuery with expected SQL", () => {
            expect(runQuery.mock.calls.length).toBe(1);
            expect(runQuery.mock.calls[0][0]).toBe(
                "INSERT INTO users VALUES ('id','name','icon','mail')"
            )
        })
        afterEach(() => {
            jest.clearAllMocks();
        })
    })
});

describe("selectPlayerById", () => {
    let runQuery;
    let result;
    const player = new proto.Player({
        id: "id",
        name: "name",
        icon: "icon",
    });
    const queryResult = [
        player.toJSON(),
    ]
    describe("query is success", () => {
        beforeEach(() => {
            runQuery = jest.spyOn(sqlWrapper, 'runQuery')
                .mockImplementation(
                    (query, onQueryDone) => onQueryDone(null, queryResult, null)
                );
            result = expect(playerDb.selectPlayerById(player.id)).resolves
        })
        it("should return player instance got from DB", () => {
            result.toMatchObject(player)
        })
        it("should call runQuery with expected SQL", () => {
            expect(runQuery.mock.calls.length).toBe(1);
            expect(runQuery.mock.calls[0][0]).toBe(
                "SELECT * FROM users WHERE id='id'"
            )
        })
        afterEach(() => {
            jest.clearAllMocks();
        })
    });
});
