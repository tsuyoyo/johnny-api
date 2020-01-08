import { Area, PrefectureMap } from "../proto/area_pb";
import { runQuery } from "./mysqlWrapper";
import { ApiException } from "../error/apiException";
import { PercussionApiError } from "../proto/error_pb";

const AREAS_TABLE = "areas";

export function addArea(
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

export function getAreasByPrefecture(
  prefecture: PrefectureMap[keyof PrefectureMap]
): Promise<Array<Area>> {
  return new Promise<Array<Area>>((onResolve, onReject) => {
    const query = `SELECT * from ${AREAS_TABLE} where prefecture=${prefecture}`;

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    runQuery(query, (err, rows, _fields) => {
      if (err) {
        onReject(err);
      } else {
        const areas = new Array<Area>();
        for (const areaObj of rows) {
          const area = new Area();
          area.setId(areaObj["id"]);
          area.setName(areaObj["name"]);
          area.setPrefecture(areaObj["prefecture"]);
          areas.push(area);
        }
        onResolve(areas);
      }
    });
  });
}

export function getAreasById(id: string): Promise<Area> {
  return new Promise<Area>((onResolve, onReject) => {
    const query = `SELECT * from ${AREAS_TABLE} where id=${id}`;

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    runQuery(query, (err, rows, _fields) => {
      if (err) {
        onReject(err);
      } else {
        if (rows.length == 0) {
          onReject(
            new ApiException(
              PercussionApiError.ErrorCode.DB_ERROR,
              `Area id=${id} is not found`,
              404
            )
          );
        } else {
          const areaObj = rows[0];
          const area = new Area();
          area.setId(areaObj["id"]);
          area.setName(areaObj["name"]);
          area.setPrefecture(areaObj["prefecture"]);
          onResolve(area);
        }
      }
    });
  });
}
