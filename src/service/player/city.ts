import { selectCities } from "../../database/user/cities";
import * as areaTable from "../../database/areas";

import { pj } from "johnny-proto";
import proto = pj.sakuchin.percussion.proto;

export function getActiveCities(playerId: string): Promise<Array<number>> { //: Promise<Array<proto.ICity>> {
  return selectCities(playerId);
    // .then((ids: Array<number>) => areaTable.selectCitiesByIds(ids));
}

// export function updateUserCities(
//   userId: string,
//   areas: Array<proto.ICity>,
//   deleteUserCities: (userId: string) => Promise<number>,
//   insertUserCities: (
//     userId: string,
//     areas: Array<proto.ICity>
//   ) => Promise<number>
// ): Promise<number> {
//   // return insertUserCities(userId, areas);
//   return deleteUserCities(userId).then(() => insertUserCities(userId, areas));
// }
