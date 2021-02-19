import { runQuery } from "../mysqlWrapper";
import { pj } from "johnny-proto";
import proto = pj.sakuchin.percussion.proto
import City = proto.City;
import { insertCities } from "../user/cities";

import { johnnyDb } from "../../database/fields";
import table = johnnyDb.tables.player.INSTRUMENT;

const TABLE_NAME = "";

function queryInsertOneValue(playerId: string, instrumentId: number): string {
  return `(null, '${playerId}', '${instrumentId}')`;
}

function queryInsert(playerId: string, values: Array<proto.IInstrument>): string {
  let query = `INSERT INTO ${TABLE_NAME} (id, ${table.PLAYER_ID}, ${table.INSTRUMENT_ID}) VALUES `;
  for (let i = 0; i < values.length; i++) {
    query += queryInsertOneValue(playerId, values[i].id) + (i < values.length - 1 ? "," : "");
  }
  return query;
}

function queryDelete(playerId: string): string {
  return `DELETE from ${table.TABLE_NAME} WHERE ${table.PLAYER_ID}='${playerId}'`;
}

function querySelect(playerId: string): string {
  return `SELECT * FROM ${table.TABLE_NAME} WHERE ${table.PLAYER_ID}='${playerId}'`;
}

function buildTypedObject(obj: object): proto.IInstrument {
  return new proto.Instrument({
    id: obj[table.ID],
    name: obj[table.NAME],
    authorId: obj[table.AUTHOR_ID],
  });
}

function buildTypedObjectArray(objects: object[]): Array<proto.IInstrument> {
  if (!objects) {
    return [];
  }
  const values = new Array<proto.IInstrument>();
  for (const obj of objects) {
    values.push(buildTypedObject(obj));
  }
  return values;
}

export function select(playerId: string): Promise<Array<proto.IInstrument>> {
  return new Promise<Array<proto.IInstrument>>((onResolve, onReject) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    runQuery(querySelect(playerId), (err, rows, _fields) => {
      if (err) {
        onReject(err);
      } else {
        onResolve(buildTypedObjectArray(rows));
      }
    });
  });
}

export function insert(
  playerId: string,
  instruments: Array<proto.IInstrument>
): Promise<number> {
  return new Promise<number>((onResolve, onReject) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    runQuery(queryInsert(playerId, instruments), (err, rows, _fields) => {
      if (err) {
        onReject(err);
      } else {
        onResolve(rows.length);
      }
    });
  });
}

export function deleteEntries(playerId: string): Promise<number> {
  return new Promise<number>((onResolve, onReject) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    runQuery(queryDelete(playerId), (err, rows, _fields) => {
      if (err) {
        onReject(err);
      } else {
        onResolve(rows.length);
      }
    });
  });
}