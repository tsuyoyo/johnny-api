import { pj } from "johnny-proto";
import proto = pj.sakuchin.percussion.proto;

export function getUserCitiesByUserId(
  userId: string,
  selectUserCities: (userId: string) => Promise<Array<number>>,
  selectCitiesByIds: (ids: Array<number>) => Promise<Array<proto.ICity>>
): Promise<Array<proto.ICity>> {
  return selectUserCities(userId).then(selectCitiesByIds);
}

export function updateUserCities(
  userId: string,
  areas: Array<proto.ICity>,
  deleteUserCities: (userId: string) => Promise<number>,
  insertUserCities: (
    userId: string,
    areas: Array<proto.ICity>
  ) => Promise<number>
): Promise<number> {
  // return insertUserCities(userId, areas);
  return deleteUserCities(userId).then(() => insertUserCities(userId, areas));
}
