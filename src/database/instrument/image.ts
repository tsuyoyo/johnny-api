import {
  runSelectQuery,
  runSingleQuery,
} from "./../mysqlWrapper";
import { johnnyDb } from "./../fields";
import table = johnnyDb.tables.instrument.IMAGE;
import dayjs = require("dayjs");

export class InstrumentImage {
  readonly url: string;
  readonly authorId: number;
  readonly date: Date;

  constructor(url: string, authorId: number, date: Date) {
    this.url = url;
    this.authorId = authorId;
    this.date = date;
  }
}

function buildImageObject(obj: object): InstrumentImage {
  return new InstrumentImage(
    obj[table.URL],
    obj[table.AUTHOR_ID],
    dayjs(obj[table.POSTED_DATE_TIME]).toDate(),
  )
}

function buildImageObjects(objects: Array<object>): Array<InstrumentImage> {
  if (!objects) {
    return [];
  }
  const values = new Array<InstrumentImage>();
  for (const obj of objects) {
    values.push(buildImageObject(obj));
  }
  return values;
}

function selectImages(
  query: string,
  values: Array<any>,
): Promise<Array<InstrumentImage>> {
  return runSelectQuery(query, values)
    .then((objects: Array<object>) => buildImageObjects(objects))
    .then((histories: Array<InstrumentImage>) =>
      histories.sort((a, b) => a.date.getMilliseconds() - b.date.getMilliseconds())
    );
}

export function insert(
  instrumentId: number,
  url: string,
  playerId: string,
  date: Date,
): Promise<number> {
  const query = (
    `INSERT INTO ${table.TABLE_NAME} ` +
    `(` +
    `${table.ID},` +
    `${table.URL},` +
    `${table.INSTRUMENT_ID},` +
    `${table.AUTHOR_ID},` +
    `${table.POSTED_DATE_TIME}` +
    `) ` +
    `VALUES (null,?,?,?,?)`
  );
  const values = [url, instrumentId, playerId, dayjs(date).format(johnnyDb.DATE_TIME_FORMAT)];
  return runSingleQuery(query, values);
}

export function selectByAuthorId(playerId: number): Promise<Array<InstrumentImage>> {
  const query = `SELECT * FROM ${table.TABLE_NAME} WHERE ${table.AUTHOR_ID}=?`;
  const values = [playerId];
  return selectImages(query, values);
}

export function selectByInstrumentId(id: number): Promise<Array<InstrumentImage>> {
  const query = `SELECT * FROM ${table.TABLE_NAME} WHERE ${table.INSTRUMENT_ID}=?`;
  const values = [id]
  return selectImages(query, values);
}

export function deleteEntry(id: number): Promise<number> {
  const query = `DELETE WHERE ${table.ID}=?`;
  const values = [id];
  return runSingleQuery(query, values);
}
