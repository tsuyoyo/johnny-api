import { runSelectQuery } from "./mysqlWrapper";
import { pj } from "johnny-proto";
import proto = pj.sakuchin.percussion.proto;
import { johnnyDb } from "./fields";
import table = johnnyDb.tables.ADDRESS;

const SELECT_FIELDS = `${table.PREFECTURE}, ${table.CITY_NAME}, ${table.CITY_ID}`;
const SELECT_QUERY = `SELECT DISTINCT ${SELECT_FIELDS} from ${table.TABLE_NAME}`;

function buildCityFromJsObj(obj: object): proto.ICity {
  return new proto.City({
    id: `${obj[table.CITY_ID]}`,
    name: obj[table.CITY_NAME],
    prefecture: obj[table.PREFECTURE],
  });
}

function buildCitiesArrayFromJsObj(objects: Array<object>): Array<proto.ICity> {
  const cities = new Array<proto.ICity>();
  for (const cityObj of objects) {
    cities.push(buildCityFromJsObj(cityObj));
  }
  return cities;
}

export async function selectCitiesByPrefecture(
  prefecture: string
): Promise<Array<proto.ICity>> {
  return runSelectQuery(`${SELECT_QUERY} WHERE ${table.PREFECTURE}=${prefecture}`)
    .then((objects: Array<object>) => buildCitiesArrayFromJsObj(objects));
}

export async function selectCitiesLikeZipCode(
  zipCode: string
): Promise<Array<proto.ICity>> {
  return runSelectQuery(`${SELECT_QUERY} WHERE ${table.ZIP_CODE} like '${zipCode}%'`)
    .then((objects: Array<object>) => buildCitiesArrayFromJsObj(objects));
}

export async function selectCitiesByZipCode(
  zipCode: string
): Promise<Array<proto.ICity>> {
  return runSelectQuery(`${SELECT_QUERY} WHERE ${table.ZIP_CODE}=${zipCode}`)
    .then((objects: Array<object>) => buildCitiesArrayFromJsObj(objects));
}

export async function selectCitiesByIds(
  ids: Array<number>
): Promise<Array<proto.ICity>> {
  let query = `${SELECT_QUERY} WHERE ${table.CITY_ID} in (`;
  for (let i = 0; i < ids.length; i++) {
    query += `'${ids[i]}'` + (i < ids.length - 1 ? "," : "");
  }
  query += ")";

  return runSelectQuery(query)
    .then((objects: Array<object>) => buildCitiesArrayFromJsObj(objects));
}
