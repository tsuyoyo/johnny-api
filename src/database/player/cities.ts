import { runQuery } from "../mysqlWrapper";
import { pj } from "johnny-proto";
import proto = pj.sakuchin.percussion.proto
import City = proto.City;

const USER_CITIES_TABLE = "user_cities";

export async function insertCities(
  playerId: string,
  cities: Array<proto.ICity>
): Promise<number> {
  return new Promise<number>((onResolve, onReject) => {
    const oneValueQuery = (userId: string, cityId: string): string =>
      `(null, '${userId}', '${cityId}')`;

    let query = `INSERT INTO ${USER_CITIES_TABLE} (id, user_id, city_id) VALUES `;
    for (let i = 0; i < cities.length; i++) {
      query +=
        oneValueQuery(playerId, cities[i].id) +
        (i < cities.length - 1 ? "," : "");
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    runQuery(query, (err, rows, _fields) => {
      if (err) {
        onReject(err);
      } else {
        onResolve(rows.length);
      }
    });
  });
}

export async function deleteCities(playerId: string): Promise<number> {
  return new Promise<number>((onResolve, onReject) => {
    const query = `DELETE from ${USER_CITIES_TABLE} WHERE user_id='${playerId}'`;

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    runQuery(query, (err, rows, _fields) => {
      if (err) {
        onReject(err);
      } else {
        onResolve(rows.length);
      }
    });
  });
}

export async function selectCities(userId: string): Promise<Array<number>> {
  return new Promise<Array<number>>((onResolve, onReject) => {
    const query = `SELECT * FROM ${USER_CITIES_TABLE} WHERE user_id='${userId}'`;

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    runQuery(query, (err, rows, _fields) => {
      if (err) {
        onReject(err);
      } else if (!rows || rows.length == 0) {
        onResolve([]);
      } else {
        const cityIds = new Array<number>();
        for (const cityObj of rows) {
          cityIds.push(cityObj["city_id"]);
        }
        onResolve(cityIds);
      }
    });
  });
}
