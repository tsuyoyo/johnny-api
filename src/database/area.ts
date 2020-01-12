import { Area, PrefectureMap } from "../proto/area_pb";
import { runQuery } from "./mysqlWrapper";
import { ApiException } from "../error/apiException";
import { PercussionApiError } from "../proto/error_pb";

const AREAS_TABLE = "areas";

export async function insertArea(
  name: string,
  prefecture: PrefectureMap[keyof PrefectureMap]
): Promise<Area> {
  return new Promise<Area>((onResolve, onReject) => {
    const query =
      `INSERT INTO ${AREAS_TABLE} VALUES (null` +
      `, N'${name}'` +
      `, ${prefecture}` +
      `)`;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    runQuery(query, (err, rows, _fields) => {
      if (err) {
        onReject(err);
      } else {
        const addedArea = new Area();
        addedArea.setId(rows["insertId"]);
        addedArea.setName(name);
        addedArea.setPrefecture(prefecture);
        onResolve(addedArea);
      }
    });
  });
}

function buildAreaFromJsObj(areaObj: object): Area {
  const area = new Area();
  area.setId(areaObj["id"]);
  area.setName(areaObj["name"]);
  area.setPrefecture(areaObj["prefecture"]);
  return area;
}

function buildAreasArrayFromJsObj(areasObj: any): Array<Area> {
  const areas = new Array<Area>();
  for (const areaObj of areasObj) {
    areas.push(buildAreaFromJsObj(areaObj));
  }
  return areas;
}

export async function selectAreasByPrefecture(
  prefecture: PrefectureMap[keyof PrefectureMap]
): Promise<Array<Area>> {
  return new Promise<Array<Area>>((onResolve, onReject) => {
    const query = `SELECT * from ${AREAS_TABLE} where prefecture=${prefecture}`;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    runQuery(query, (err, rows, _fields) => {
      if (err) {
        onReject(err);
      } else {
        if (!rows || rows.length == 0) {
          onResolve([]);
        } else {
          onResolve(buildAreasArrayFromJsObj(rows));
        }
      }
    });
  });
}

export async function selectAreaById(id: number): Promise<Area> {
  return new Promise<Area>((onResolve, onReject) => {
    const query = `SELECT * from ${AREAS_TABLE} where id=${id}`;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    runQuery(query, (err, rows, _fields) => {
      if (err) {
        onReject(err);
      } else if (rows.length > 0) {
        onResolve(buildAreaFromJsObj(rows[0]));
      } else {
        const notFoundError = new ApiException(
          PercussionApiError.ErrorCode.DB_ERROR,
          `Area id=${id} is not found`,
          404
        );
        onReject(notFoundError);
      }
    });
  });
}

export async function selectAreasByIds(
  ids: Array<number>
): Promise<Array<Area>> {
  return new Promise<Array<Area>>((onResolve, onReject) => {
    if (ids.length == 0) {
      onResolve([]);
      return;
    }
    let query = `SELECT * from ${AREAS_TABLE} where id in (`;
    for (let i = 0; i < ids.length; i++) {
      query += ids[i];
      if (i < ids.length - 1) {
        query += ",";
      } else {
        query += ")";
      }
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    runQuery(query, (err, rows, _fields) =>
      onResolve(buildAreasArrayFromJsObj(rows))
    );
  });
}
