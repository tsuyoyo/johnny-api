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
  readonly url;
  string;
  readonly introduction: string;
  readonly registeredDate: Date;

  constructor(
    id: number,
    name: string,
    cityId: number,
    url: string,
    introduction: string,
    registeredDate: Date
  ) {
    this.id = id;
    this.name = name;
    this.cityId = cityId;
    this.url = url;
    this.introduction = introduction;
    this.registeredDate = registeredDate;
  }
}

function buildStudioDataObject(obj: object): StudioData {
  return new StudioData(
    obj[table.ID],
    obj[table.NAME],
    obj[table.CITY_ID],
    obj[table.URL],
    obj[table.INTRODUCTION],
    dayjs(obj[table.REGISTERED_DATE_TIME]).toDate()
  );
}

function buildStudioDataObjects(objects: Array<object>): Array<StudioData> {
  return objects ? objects.map((obj) => buildStudioDataObject(obj)) : [];
}

export function insert(
  name: string,
  cityId: number,
  authorId: string,
  introduction: string,
  date: Date
): Promise<number> {
  const query =
    `INSERT INTO ${table.TABLE_NAME} ` +
    `(` +
    `${table.ID},` +
    `${table.NAME},` +
    `${table.CITY_ID},` +
    `${table.AUTHOR_ID},` +
    `${table.INTRODUCTION},` +
    `${table.REGISTERED_DATE_TIME}` +
    `) VALUES (null,?,?,?,?,?)`;
  const values = [
    name,
    cityId,
    authorId,
    introduction,
    dayjs(date).format(johnnyDb.DATE_TIME_FORMAT),
  ];
  return runSingleQuery(query, values);
}

export function selectById(id: number): Promise<StudioData> {
  const query = `SELECT * FROM ${table.TABLE_NAME} WHERE ${table.ID}=?`;
  const values = [id];
  return runSelectQuery(query, values).then((objects: Array<object>) =>
    objects.length > 0 ? buildStudioDataObject(objects[0]) : null
  );
}

export function selectByIds(ids: Array<number>): Promise<Array<StudioData>> {
  const query =
    `SELECT * FROM ${table.TABLE_NAME} ` +
    `WHERE ${table.ID} in (${ids.map(() => "?").join(",")})`;
  return runSelectQuery(query, ids).then((objects: Array<object>) =>
    buildStudioDataObjects(objects)
  );
}

export function selectByCityId(cityId: number): Promise<Array<StudioData>> {
  const query = `SELECT * FROM ${table.TABLE_NAME} WHERE ${table.CITY_ID}=?`;
  const values = [cityId];
  return runSelectQuery(query, values).then((objects: Array<object>) =>
    buildStudioDataObjects(objects)
  );
}

export function selectByCityIds(
  cityIds: Array<number>
): Promise<Array<StudioData>> {
  const query =
    `SELECT * FROM ${table.TABLE_NAME} ` +
    `WHERE ${table.CITY_ID} in (${cityIds.map(() => "?").join(",")})`;
  return runSelectQuery(query, cityIds).then((objects: Array<object>) =>
    buildStudioDataObjects(objects)
  );
}

export function update(
  id: number,
  name: string,
  url: string,
  introduction: string
): Promise<number> {
  const query =
    `UPDATE ${table.TABLE_NAME} ` +
    `SET ${table.NAME}=? ${table.URL}=? ${table.INTRODUCTION}=?` +
    `WHERE ${table.ID}=?`;
  const values = [name, url, introduction, id];
  return runSingleQuery(query, values);
}

export function deleteEntry(id: number): Promise<number> {
  const query = `DELETE WHERE ${table.ID}=?`;
  const values = [id];
  return runSingleQuery(query, values);
}
