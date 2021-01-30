import { getActiveCities } from "../../../src/service/player/city";

import * as userCityTable from "../../../src/database/user/cities";
import * as areaTable from "../../../src/database/areas";
import { pj } from "johnny-proto";
import proto = pj.sakuchin.percussion.proto;

describe('getActiveCities', () => {
    test('if it is mocked', () => {
        const mockedCityTable = jest.spyOn(userCityTable, 'selectCities')
            .mockReturnValueOnce(
                new Promise<Array<number>>((onResolve, onReject) => {
                    onResolve([1, 2, 3]);
                })
            );
        
        expect(getActiveCities("aaa"))
            .resolves
            .toMatchObject([1, 2, 3]);
    })
})