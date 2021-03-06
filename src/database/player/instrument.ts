import {
  runSelectQuery,
  runSingleQuery,
  runSelectQueryOnConnection,
  runSingleQueryOnConnection,
  queryInTransaction,
  commitTransaction,
  rollbackTransaction,
} from "../mysqlWrapper";
import { Connection } from "mysql";
import { johnnyDb } from "../../database/fields";
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

function queryDeleteByIds(ids: Array<number>): string {
  return `DELETE from ${table.TABLE_NAME} WHERE ${table.ID} in (${ids.join(',')})`;
}

function querySelect(playerId: string): string {
  return `SELECT * FROM ${table.TABLE_NAME} WHERE ${table.PLAYER_ID}='${playerId}'`;
}

function buildTypedObjectArray(objects: object[]): Array<number> {
  if (!objects) {
    return new Array();
  }
  const values = new Array<number>();
  for (const obj of objects) {
    values.push(obj[table.INSTRUMENT_ID]);
  }
  return values;
}

export function select(playerId: string): Promise<Array<number>> {
  return runSelectQuery(querySelect(playerId))
    .then((objects: Array<object>) => buildTypedObjectArray(objects));
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

export function update(playerId: string, ids: Array<number>): Promise<void> {
  return queryInTransaction((connection: Connection) =>
      runSelectQueryOnConnection(querySelect(playerId), connection)
        .then((objects) => buildTypedObjectArray(objects))
        .then((currentIds: Array<number>) => {
          const removedIds = currentIds.filter(id => !ids.includes(id));
          const newIds = ids.filter(id => !currentIds.includes(id))

          const deleteQuery = (removedIds.length > 0) ? queryDeleteByIds(removedIds) : null;
          const insertQuery = (newIds.length > 0) ? queryInsert(playerId, newIds) : null;

          // There's no data update actually.
          if (!deleteQuery && !insertQuery) {
            return Promise.resolve()
          }
          let processInTransaction;
          if (deleteQuery && insertQuery) {
            processInTransaction = runSingleQueryOnConnection(deleteQuery, connection)
              .then(() => runSingleQueryOnConnection(insertQuery, connection))
          } else if (deleteQuery) {
            processInTransaction = runSingleQueryOnConnection(deleteQuery, connection)
          } else {
            processInTransaction = runSingleQueryOnConnection(insertQuery, connection)
          }

          return processInTransaction
            .then(() => commitTransaction(connection))
            .catch(() => rollbackTransaction(connection));
        })
  )
}