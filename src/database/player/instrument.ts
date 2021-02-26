import { runQuery, runSelectQuery, runSingleQuery } from "../mysqlWrapper";
import { pj } from "johnny-proto";
import { johnnyDb } from "../../database/fields";
import proto = pj.sakuchin.percussion.proto
import table = johnnyDb.tables.player.INSTRUMENT;

function queryInsertOneValue(playerId: string, instrumentId: number): string {
  return `(null, '${playerId}', '${instrumentId}')`;
}

function queryInsert(playerId: string, ids: Array<number>): string {
  let query = `INSERT INTO ${table.TABLE_NAME} ` +
    `(${table.ID}, ${table.PLAYER_ID}, ${table.INSTRUMENT_ID}) ` +
    `VALUES `;
  for (let i = 0; i < ids.length; i++) {
    query += queryInsertOneValue(playerId, ids[i]) + (i < ids.length - 1 ? "," : "");
  }
  return query;
}

function queryDelete(playerId: string): string {
  return `DELETE from ${table.TABLE_NAME} WHERE ${table.PLAYER_ID}='${playerId}'`;
}

function querySelect(playerId: string): string {
  return `SELECT * FROM ${table.TABLE_NAME} WHERE ${table.PLAYER_ID}='${playerId}'`;
}

function buildTypedObjectArray(objects: object[]): Array<number> {
  if (!objects) {
    return [];
  }
  const values = new Array<number>();
  for (const obj of objects) {
    values.push(obj[table.INSTRUMENT_ID]);
  }
  return values;
}

export function select(playerId: string): Promise<Array<number>> {
  return runSelectQuery(querySelect(playerId), buildTypedObjectArray);
}

export function insert(
  playerId: string,
  instrumentIds: Array<number>
): Promise<number> {
  return runSingleQuery(queryInsert(playerId, instrumentIds));
}

export function deleteEntries(playerId: string): Promise<number> {
  return runSingleQuery(queryDelete(playerId));
}