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
  const query =
    `INSERT INTO ${table.TABLE_NAME} ` +
    `(` +
    `${table.ID},` +
    `${table.NAME},` +
    `${table.AUTHOR_ID},` +
    `${table.REGISTERED_DATE_TIME}` +
    `) ` +
    `VALUES ` +
    `(` +
    `null,` +
    `'${name}',` +
    `${playerId},` +
    `'${dayjs(date).format(johnnyDb.DATE_TIME_FORMAT)}'` +
    `)`;
  return runSingleQuery(query);
}

export function selectById(id: number): Promise<proto.IInstrument> {
  const query = `SELECT * FROM ${table.TABLE_NAME} WHERE ${table.ID}=${id}`;
  return runSelectQuery(query).then((objects: Array<object>) =>
    objects.length > 0 ? buildInstrumentObject(objects[0]) : null
  );
}

export function selectByIds(
  ids: Array<number>
): Promise<Array<proto.IInstrument>> {
  let query = `SELECT * FROM ${table.TABLE_NAME} WHERE ${table.ID} in (`;
  for (let i = 0; i < ids.length; i++) {
    query += `'${ids[i]}'` + (i < ids.length - 1 ? "," : "");
  }
  query += ")";
  return runSelectQuery(query).then((objects: Array<object>) =>
    buildInstrumentObjects(objects)
  );
}

export function update(id: number, name: string): Promise<number> {
  const query = `UPDATE ${table.TABLE_NAME} SET ${table.NAME}=${name} WHERE ${table.ID}=${id}`;
  return runSingleQuery(query);
}

export function deleteEntry(id: number): Promise<number> {
  const query = `DELETE WHERE ${table.ID}=${id}`;
  return runSingleQuery(query);
}
