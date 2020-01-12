import { runQuery } from "./mysqlWrapper";
import { Area } from "../proto/area_pb";

const USER_ACTIVITY_AREAS_TABLE = "user_activity_areas";

export async function insertActivityAreas(
  userId: string,
  areas: Array<Area>
): Promise<number> {
  return new Promise<number>((onResolve, onReject) => {
    let query = `INSERT INTO ${USER_ACTIVITY_AREAS_TABLE} (user_id, area_id) VALUES (`;
    for (let i = 0; i < areas.length; i++) {
      query += `("${userId}, ${areas[i].getId()}")`;
      if (i < areas.length - 1) {
        query += ",";
      } else {
        query += ")";
      }
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

export async function deleteActiveAreas(userId: string): Promise<number> {
  return new Promise<number>((onResolve, onReject) => {
    const query = `DELETE ${USER_ACTIVITY_AREAS_TABLE} WHERE user_id="${userId}"`;
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

export async function selectActiveAreaIds(
  userId: string
): Promise<Array<number>> {
  return new Promise<Array<number>>((onResolve, onReject) => {
    const query = `SELECT * from ${USER_ACTIVITY_AREAS_TABLE} where user_id="${userId}"`;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    runQuery(query, (err, rows, _fields) => {
      if (err) {
        onReject(err);
      } else if (!rows || rows.length == 0) {
        console.log(`selectActiveAreaIds - empty`);
        onResolve([]);
      } else {
        const areaIds = new Array<number>();
        for (const activeAreaObj of rows) {
          areaIds.push(activeAreaObj["area_id"]);
        }
        onResolve(areaIds);
      }
    });
  });
}
