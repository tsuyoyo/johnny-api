import {
  runSelectQuery,
  runSingleQuery,
  runSelectQueryOnConnection,
  runSingleQueryOnConnection,
  queryInTransaction,
  commitTransaction,
  rollbackTransaction,
} from "../mysqlWrapper";
import { johnnyDb } from "../../database/fields";
import table = johnnyDb.tables.player.STUDIO;
import { Connection } from "mysql";

function queryInsert(ids: Array<number>): string {
  return `INSERT INTO ${table.TABLE_NAME} ` +
    `(${table.ID}, ${table.PLAYER_ID}, ${table.STUDIO_ID}) ` +
    `VALUES ${ids.map(() => '(null,?,?)').join(',')}`;
}

function valuesInsert(playerId: string, ids: Array<number>): Array<any> {
  const values = new Array<any>();
  ids.forEach((id: number) => {
    values.push(playerId);
    values.push(id);
  })
  return values;
}

function queryDeleteByIds(ids: Array<number>): string {
  return `DELETE from ${table.TABLE_NAME} WHERE ${table.ID} in (${ids.map(() => '?').join(',')})`;
}

function buildTypedObjectArray(objects: object[]): Array<number> {
  const values = new Array<number>();
  objects.forEach((obj) => values.push(obj[table.STUDIO_ID]))
  return values;
}

export function select(playerId: string): Promise<Array<number>> {
  const query = `SELECT * FROM ${table.TABLE_NAME} WHERE ${table.PLAYER_ID}=?`;
  const values = [playerId];
  return runSelectQuery(query, values)
    .then((objects: Array<object>) => buildTypedObjectArray(objects));
}

export function insert(
  playerId: string,
  studioIds: Array<number>
): Promise<number> {
  const query = queryInsert(studioIds);
  const values = valuesInsert(playerId, studioIds);
  return runSingleQuery(query, values);
}

export function deleteEntries(playerId: string): Promise<number> {
  const query = `DELETE from ${table.TABLE_NAME} WHERE ${table.PLAYER_ID}=?`;
  const values = [playerId];
  return runSingleQuery(query, values);
}

export function update(playerId: string, ids: Array<number>): Promise<void> {
  return queryInTransaction((connection: Connection) =>
      runSelectQueryOnConnection(
        `SELECT * FROM ${table.TABLE_NAME} WHERE ${table.PLAYER_ID}=?`, [playerId], connection
      )
        .then((objects) => buildTypedObjectArray(objects))
        .then((currentIds: Array<number>) => {
          const removedIds = currentIds.filter(id => !ids.includes(id));
          const newIds = ids.filter(id => !currentIds.includes(id))

          const deleteQuery = (removedIds.length > 0) ? queryDeleteByIds(removedIds) : null;
          const insertQuery = (newIds.length > 0) ? queryInsert(newIds) : null;
          const insertValues = valuesInsert(playerId, newIds);

          // There's no data update actually.
          if (!deleteQuery && !insertQuery) {
            return Promise.resolve()
          }
          let processInTransaction;
          if (deleteQuery && insertQuery) {
            processInTransaction = runSingleQueryOnConnection(deleteQuery, removedIds, connection)
              .then(() => runSingleQueryOnConnection(insertQuery, insertValues, connection))
          } else if (deleteQuery) {
            processInTransaction = runSingleQueryOnConnection(deleteQuery, removedIds, connection)
          } else {
            processInTransaction = runSingleQueryOnConnection(insertQuery, insertValues, connection)
          }

          return processInTransaction
            .then(() => commitTransaction(connection))
            .catch(() => rollbackTransaction(connection));
        })
  )
}