import { runSelectQuery, runSingleQuery } from "./mysqlWrapper";
import { pj } from "johnny-proto";
import proto = pj.sakuchin.percussion.proto;
import { johnnyDb } from "./fields";
import table = johnnyDb.tables.STUDIO;
import dayjs = require("dayjs");

export class StudioData {
  readonly id: number;
  readonly name: string;
  readonly cityId: number;
  readonly url; string;
  readonly registeredDate: Date;

  constructor(id: number, name: string, cityId: number, url: string, registeredDate: Date) {
    this.id = id;
    this.name = name;
    this.cityId = cityId;
    this.url = url;
    this.registeredDate = registeredDate;
  }
}

function buildStudioDataObject(obj: object): StudioData {
  return new StudioData(
    obj[table.ID],
    obj[table.NAME],
    obj[table.CITY_ID],
    obj[table.URL],
    dayjs(obj[table.REGISTERED_DATE_TIME]).toDate(),
  )
}

function buildStudioDataObjects(
  objects: Array<object>
): Array<StudioData> {
  return objects ? objects.map(obj => buildStudioDataObject(obj)) : [];
}

export function insert(
  name: string,
  cityId: number,
  authorId: string,
  date: Date
): Promise<number> {
  const query =
    `INSERT INTO ${table.TABLE_NAME} ` +
    `(` +
    `${table.ID},` +
    `${table.NAME},` +
    `${table.CITY_ID},` +
    `${table.AUTHOR_ID},` +
    `${table.REGISTERED_DATE_TIME}` +
    `) ` +
    `VALUES ` +
    `(` +
    `null,` +
    `'${name}',` +
    `${cityId},` +
    `${authorId},` +
    `'${dayjs(date).format(johnnyDb.DATE_TIME_FORMAT)}'` +
    `)`;
  return runSingleQuery(query);
}

export function selectById(id: number): Promise<StudioData> {
  const query = `SELECT * FROM ${table.TABLE_NAME} WHERE ${table.ID}=${id}`;
  return runSelectQuery(query).then((objects: Array<object>) =>
    objects.length > 0 ? buildStudioDataObject(objects[0]) : null
  );
}

export function selectByIds(
  ids: Array<number>
): Promise<Array<StudioData>> {
  let query = `SELECT * FROM ${table.TABLE_NAME} WHERE ${table.ID} in (`;
  for (let i = 0; i < ids.length; i++) {
    query += `'${ids[i]}'` + (i < ids.length - 1 ? "," : "");
  }
  query += ")";
  return runSelectQuery(query).then((objects: Array<object>) =>
    buildStudioDataObjects(objects)
  );
}

export function selectByCityId(cityId: number): Promise<Array<StudioData>> {

}

export function selectByCityIds(cityIds: Array<number>): Promise<Array<StudioData>> {
  
}

export function update(id: number, name: string, url: string): Promise<number> {
  return runSingleQuery(
    `UPDATE ${table.TABLE_NAME} ` + 
    `SET ${table.NAME}='${name}' ${table.URL}='${url}'` +
    `WHERE ${table.ID}=${id}`
  );
}

export function deleteEntry(id: number): Promise<number> {
  return runSingleQuery(`DELETE WHERE ${table.ID}=${id}`);
}
