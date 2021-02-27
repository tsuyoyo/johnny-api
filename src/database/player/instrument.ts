import { runSelectQuery, runSingleQuery, queryInTransaction } from "../mysqlWrapper";
import { pj } from "johnny-proto";
import { johnnyDb } from "../../database/fields";
import proto = pj.sakuchin.percussion.proto
import table = johnnyDb.tables.player.INSTRUMENT;
import { selectCities } from "../user/cities";

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
    return [];
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

export function update(
  playerId: string,
  instrumentIds: Array<number>
): Promise<void> {

  // https://tech.chakapoko.com/nodejs/mysql/promise.html
  // TODO : commitをするpromise
  // TODO : promiseでエラーになった時にrollback

  const selectCurrentValues = (connection) => new Promise<Array<number>>(
    (onResolve, onReject) => {
      connection.query(querySelect(playerId), (err, rows) => {
        if (err) {
          onReject(err)
        } else {
          onResolve(buildTypedObjectArray(rows))
        }
      })
    });

  const deleteRemovedValues = (connection, ids: Array<number>) => new Promise<Array<void>>(
    (onResolve, onReject) => {
      connection.query(queryDeleteByIds(ids), (err) => {
        if (err) {
          onReject(err)
        } else {
          onResolve()
        }
      })
    });
  
  const insertNewValues = (connection, ids: Array<number>) => new Promise<Array<void>>(
    (onResolve, onReject) => {
      connection.query(queryInsert(playerId, ids), (err) => {
        if (err) {
          onReject(err)
        } else {
          onResolve()
        }
      })
    });

  const processTransaction = (connection) => new Promise<void>(
    (onResolve, onReject) => {
      (connection) => {
        selectCurrentValues(connection)
          .then((currentIds: Array<number>) => {    
            const removedIds = new Array<number>();
            currentIds
              .filter(id => !instrumentIds.includes(id))
              .forEach(id => removedIds.push(id));

            const newIds = new Array<number>();        
            instrumentIds
              .filter(id => !currentIds.includes(id))
              .forEach(id => newIds.push(id))
  
            if (newIds.length > 0 && removedIds.length > 0) {

              deleteRemovedValues(connection, removedIds)
                .then(() => insertNewValues(connection, newIds))
                .then(() => connection.commit()) 


            } else if (newIds.length > 0 && removedIds.length == 0) {

            } else if (newIds.length == 0 && removedIds.length > 0) {
              deleteRemovedValues(connection, removedIds)
            } else {
              onResolve()
            }




            if (removedIds.length > 0) {
              try {
                await deleteRemovedValues(connection, removedIds);              
              } catch (err) {
                onReject(err)
              }
            }


            if (newIds.length > 0) {
              try {
                await insertNewValues(connection, newIds);
              } catch (err) {
                onReject(err)
              }
            }

            onResolve()
          })
      }
    }
  );

  return queryInTransaction(processTransaction);
}