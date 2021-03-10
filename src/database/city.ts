import { runSelectQuery } from "./mysqlWrapper";
import { pj } from "johnny-proto";
import proto = pj.sakuchin.percussion.proto;
import { johnnyDb } from "./fields";
import table = johnnyDb.tables.ADDRESS;

const SELECT_FIELDS = `${table.PREFECTURE}, ${table.CITY_NAME}, ${table.CITY_ID}`;
const SELECT_QUERY = `SELECT DISTINCT ${SELECT_FIELDS} FROM ${table.TABLE_NAME}`;

function buildCityFromJsObj(obj: object): proto.ICity {
  return new proto.City({
    id: `${obj[table.CITY_ID]}`,
    name: obj[table.CITY_NAME],
    prefecture: proto.Prefecture[obj[table.PREFECTURE] as string],
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
  prefecture: proto.Prefecture
): Promise<Array<proto.ICity>> {
  const query = `${SELECT_QUERY} WHERE ${table.PREFECTURE}=?`;
  const values = [proto.Prefecture[prefecture]];
  return runSelectQuery(query, values).then((objects: Array<object>) =>
    buildCitiesArrayFromJsObj(objects)
  );
}

export async function selectCitiesLikeZipCode(
  zipCode: string
): Promise<Array<proto.ICity>> {
  const query = `${SELECT_QUERY} WHERE ${table.ZIP_CODE} like ?`;
  const values = [`${zipCode}%`];
  return runSelectQuery(query, values).then((objects: Array<object>) =>
    buildCitiesArrayFromJsObj(objects)
  );
}

export async function selectCitiesByZipCode(
  zipCode: string
): Promise<Array<proto.ICity>> {
  const query = `${SELECT_QUERY} WHERE ${table.ZIP_CODE}=?`;
  const values = [zipCode];
  return runSelectQuery(query, values).then((objects: Array<object>) =>
    buildCitiesArrayFromJsObj(objects)
  );
}

export async function selectCitiesByIds(
  ids: Array<number>
): Promise<Array<proto.ICity>> {
  let query = `${SELECT_QUERY} WHERE ${table.CITY_ID} in (`;
  const values = new Array<number>();
  for (let i = 0; i < ids.length; i++) {
    query += "?" + (i < ids.length - 1 ? "," : "");
    values.push(ids[i]);
  }
  query += ")";

  return runSelectQuery(query, values).then((objects: Array<object>) =>
    buildCitiesArrayFromJsObj(objects)
  );
}
