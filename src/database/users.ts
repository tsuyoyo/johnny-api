import { User } from "../proto/user_pb";
import { runQuery } from "./mysqlWrapper";
import { Area } from "../proto/area_pb";

const USER_TABLE = "users";
const USER_ACTIVITY_AREAS_TABLE = "user_activity_areas";

export function addUser(user: User, mail: string): Promise<User> {
  return new Promise<User>((onResolve, onReject) => {
    const query =
      `INSERT INTO ${USER_TABLE} VALUES (` +
      `'${user.getId()}'` +
      `,'${user.getName()}'` +
      `,'${user.getPhoto()}'` +
      `,'${mail}'` +
      `)`;

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    runQuery(query, (err, _rows, _fields) => {
      if (err) {
        onReject(err);
      } else {
        onResolve(user);
      }
    });
  });
}

export async function setActivityAreas(
  userId: string,
  areas: Array<Area>
): Promise<number> {
  return new Promise<number>((onResolve, onReject) => {
    let query = `INSERT INTO ${USER_ACTIVITY_AREAS_TABLE} (user_id, area_id) VALUES (`;
    for (let i = 0; i < areas.length; i++) {
      query += `("${userId}, ${areas[i].getId()}")`;
      if (i != areas.length - 1) {
        query += ",";
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

export async function getActiveAreaIds(userId: string): Promise<Array<number>> {
  return new Promise<Array<number>>((onResolve, onReject) => {
    const query = `SELECT * from ${USER_ACTIVITY_AREAS_TABLE}} where user_id=${userId}`;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    runQuery(query, (err, rows, _fields) => {
      if (err) {
        onReject(err);
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
