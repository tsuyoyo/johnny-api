import { City } from "../proto/area_pb";

export function getUserCitiesByUserId(
  userId: string,
  selectUserCities: (userId: string) => Promise<Array<number>>,
  selectCitiesByIds: (ids: Array<number>) => Promise<Array<City>>
): Promise<Array<City>> {
  return selectUserCities(userId).then(selectCitiesByIds);
}

export function updateUserCities(
  userId: string,
  areas: Array<City>,
  deleteUserCities: (userId: string) => Promise<number>,
  insertUserCities: (userId: string, areas: Array<City>) => Promise<number>
): Promise<number> {
  // return insertUserCities(userId, areas);
  return deleteUserCities(userId).then(() => insertUserCities(userId, areas));
}
