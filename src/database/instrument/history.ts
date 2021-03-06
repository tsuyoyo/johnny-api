import {
  runSelectQuery,
  runSingleQuery,
} from "./../mysqlWrapper";
import { johnnyDb } from "./../fields";
import table = johnnyDb.tables.instrument.HISTORY;
import dayjs = require("dayjs");

export class InstrumentEditHistory {
  readonly playerId: number;
  readonly date: Date;

  constructor(playerId: number, date: Date) {
    this.playerId = playerId;
    this.date = date;
  }
}

function buildHistoryObject(obj: object): InstrumentEditHistory {
  return new InstrumentEditHistory(
    obj[table.PLAYER_ID],
    dayjs(obj[table.UPDATED_DATE_TIME]).toDate(),
  )
}

function buildHistoryObjects(objects: Array<object>): Array<InstrumentEditHistory> {
  if (!objects) {
    return [];
  }
  const values = new Array<InstrumentEditHistory>();
  for (const obj of objects) {
    values.push(buildHistoryObject(obj));
  }
  return values;
}

function selectHistories(query: string): Promise<Array<InstrumentEditHistory>> {
  return runSelectQuery(query)
    .then((objects: Array<object>) => buildHistoryObjects(objects))
    .then((histories: Array<InstrumentEditHistory>) =>
      histories.sort((a, b) => b.date.getMilliseconds() - a.date.getMilliseconds())
    );
}

export function insert(instrumentId: number, playerId: string, date: Date): Promise<number> {
  const query = (
    `INSERT INTO ${table.TABLE_NAME} ` +
    `(` +
    `${table.ID},` +
    `${table.INSTRUMENT_ID},` +
    `${table.PLAYER_ID},` +
    `${table.UPDATED_DATE_TIME}` +
    `) ` +
    `VALUES ` +
    `(` +
    `'null,` +
    `'${instrumentId},` +
    `'${playerId},` +
    `'${dayjs(date).format(johnnyDb.DATE_TIME_FORMAT)},` +
    `)`
  );
  return runSingleQuery(query);
}

export function selectByPlayerId(playerId: number): Promise<Array<InstrumentEditHistory>> {
  return selectHistories(
    `SELECT * FROM ${table.TABLE_NAME} WHERE ${table.PLAYER_ID}=${playerId}`
  );
}

export function selectByInstrumentId(id: number): Promise<Array<InstrumentEditHistory>> {
  return selectHistories(
    `SELECT * FROM ${table.TABLE_NAME} WHERE ${table.INSTRUMENT_ID}=${id}`
  );
}

export function deleteEntry(id: number): Promise<number> {
  const query = `DELETE WHERE ${table.ID}=${id}`;
  return runSingleQuery(query);
}
