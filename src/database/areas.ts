import { PrefectureMap, City } from "../proto/area_pb";
import { runQuery } from "./mysqlWrapper";

const ADDRESS_TABLE = "ad_address";
const SELECT_FIELDS = "prefecture_id, city_name, city_id";
const SELECT_QUERY = `SELECT DISTINCT ${SELECT_FIELDS} from ${ADDRESS_TABLE}`;

function buildCityFromJsObj(obj: object): City {
  const city = new City();
  city.setId(`${obj["city_id"]}`);
  city.setName(obj["city_name"]);
  city.setPrefecture(obj["prefecture_id"]);
  return city;
}

function buildCitiesArrayFromJsObj(objects: any): Array<City> {
  const cities = new Array<City>();
  for (const cityObj of objects) {
    cities.push(buildCityFromJsObj(cityObj));
  }
  return cities;
}

// E.g.
// select DISTINCT prefecture_id, city_name, city_id, zip_code from ad_address where prefecture_id=12;
export async function selectCitiesByPrefecture(
  prefecture: string
): Promise<Array<City>> {
  return new Promise<Array<City>>((onResolve, onReject) => {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    runSelectQuery(`where prefecture_id=${prefecture}`, onResolve, onReject);
  });
}

export async function selectCitiesLikeZipCode(
  zipCode: string
): Promise<Array<City>> {
  return new Promise<Array<City>>((onResolve, onReject) => {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    runSelectQuery(`where zip_code like '${zipCode}%'`, onResolve, onReject);
  });
}

export async function selectCitiesByZipCode(
  zipCode: string
): Promise<Array<City>> {
  return new Promise<Array<City>>((onResolve, onReject) => {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    runSelectQuery(`where zip_code=${zipCode}`, onResolve, onReject);
  });
}

export async function selectCitiesByIds(
  ids: Array<number>
): Promise<Array<City>> {
  return new Promise<Array<City>>((onResolve, onReject) => {
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
