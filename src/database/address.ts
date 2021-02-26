import { runQuery } from "./mysqlWrapper";
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

function buildCitiesArrayFromJsObj(objects: any): Array<proto.ICity> {
  const cities = new Array<proto.ICity>();
  for (const cityObj of objects) {
    cities.push(buildCityFromJsObj(cityObj));
  }
  return cities;
}

// E.g.
// select DISTINCT prefecture_id, city_name, city_id, zip_code from ad_address where prefecture_id=12;
export async function selectCitiesByPrefecture(
  prefecture: string
): Promise<Array<proto.ICity>> {
  return new Promise<Array<proto.ICity>>((onResolve, onReject) => {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    runSelectQuery(`WHERE ${table.PREFECTURE}=${prefecture}`, onResolve, onReject);
  });
}

export async function selectCitiesLikeZipCode(
  zipCode: string
): Promise<Array<proto.ICity>> {
  return new Promise<Array<proto.ICity>>((onResolve, onReject) => {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    runSelectQuery(`WHERE ${table.ZIP_CODE} like '${zipCode}%'`, onResolve, onReject);
  });
}

export async function selectCitiesByZipCode(
  zipCode: string
): Promise<Array<proto.ICity>> {
  return new Promise<Array<proto.ICity>>((onResolve, onReject) => {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    runSelectQuery(`WHERE ${table.ZIP_CODE}=${zipCode}`, onResolve, onReject);
  });
}

export async function selectCitiesByIds(
  ids: Array<number>
): Promise<Array<proto.ICity>> {
  return new Promise<Array<proto.ICity>>((onResolve, onReject) => {
    let query = `where city_id in (`;
    for (let i = 0; i < ids.length; i++) {
      query += `'${ids[i]}'` + (i < ids.length - 1 ? "," : ")");
    }
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    runSelectQuery(query, onResolve, onReject);
  });
}

function runSelectQuery(whereQuery: string, onResolve, onReject): void {
  runQuery(`${SELECT_QUERY} ${whereQuery}`, (err, rows) => {
    if (err) {
      onReject(err);
    } else {
      onResolve(
        !rows || rows.length == 0 ? [] : buildCitiesArrayFromJsObj(rows)
      );
    }
  });
}
