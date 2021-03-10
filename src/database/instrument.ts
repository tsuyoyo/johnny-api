import { runSelectQuery, runSingleQuery } from "./mysqlWrapper";
import { pj } from "johnny-proto";
import proto = pj.sakuchin.percussion.proto;
import { johnnyDb } from "./fields";
import table = johnnyDb.tables.INSTRUMENT;
import dayjs = require("dayjs");

function buildInstrumentObject(obj: object): proto.IInstrument {
  return new proto.Instrument({
    id: obj[table.ID],
    name: obj[table.NAME],
    authorId: obj[table.AUTHOR_ID],
  });
}

function buildInstrumentObjects(
  objects: Array<object>
): Array<proto.IInstrument> {
  if (!objects) {
    return [];
  }
  const values = new Array<proto.IInstrument>();
  for (const obj of objects) {
    values.push(buildInstrumentObject(obj));
  }
  return values;
}

export function insert(
  name: string,
  playerId: string,
  date: Date
): Promise<number> {
  const formattedDate = dayjs(date).format(johnnyDb.DATE_TIME_FORMAT);
  const query =
    `INSERT INTO ${table.TABLE_NAME} ` +
    `(` +
    `${table.ID},` +
    `${table.NAME},` +
    `${table.AUTHOR_ID},` +
    `${table.REGISTERED_DATE_TIME}` +
    `) ` +
    `VALUES (null,?,?,?)`;
  const values = [name, playerId, formattedDate];
  return runSingleQuery(query, values);
}

export function selectById(id: number): Promise<proto.IInstrument> {
  const query = `SELECT * FROM ${table.TABLE_NAME} WHERE ${table.ID}=?`;
  const values = [id];
  return runSelectQuery(query, values).then((objects: Array<object>) =>
    objects.length > 0 ? buildInstrumentObject(objects[0]) : null
  );
}

export function selectByIds(
  ids: Array<number>
): Promise<Array<proto.IInstrument>> {
  const values = new Array<number>();
  const query =
    `SELECT * FROM ${table.TABLE_NAME} ` +
    `WHERE ${table.ID} in (${ids.map(() => "?").join(",")})`;
  return runSelectQuery(query, ids).then((objects: Array<object>) =>
    buildInstrumentObjects(objects)
  );
}

export function update(id: number, name: string): Promise<number> {
  const query = `UPDATE ${table.TABLE_NAME} SET ${table.NAME}=? WHERE ${table.ID}=?`;
  const values = [name, id];
  return runSingleQuery(query, values);
}

export function deleteEntry(id: number): Promise<number> {
  const query = `DELETE WHERE ${table.ID}=?`;
  const values = [id];
  return runSingleQuery(query, values);
}
