import * as dayjs from "dayjs";
import { runSelectQuery, runSingleQuery } from "./mysqlWrapper";
import { ApiException } from "../error/apiException";
import { pj } from "johnny-proto";
import proto = pj.sakuchin.percussion.proto;
import { johnnyDb } from "./fields";
import table = johnnyDb.tables.PLAYER;

function insertQuery(player: proto.IPlayer, mail: string, date: Date): string {
  const formatDate = dayjs(date).format(johnnyDb.DATE_TIME_FORMAT);
  return (
    `INSERT INTO ${table.TABLE_NAME} ` +
    `(` +
    `${table.ID},` +
    `${table.NAME},` +
    `${table.ICON},` +
    `${table.MAIL},` +
    `${table.REGISTERED_DATE_TIME},` +
    `${table.UPDATED_DATE_TIME}` +
    `) ` +
    `VALUES ` +
    `(` +
    `'${player.id}',` +
    `'${player.name}',` +
    `'${player.icon}',` +
    `'${mail}',` +
    `'${formatDate},` +
    `'${formatDate}'` +
    `)`
  );
}

function updateQueryForPlayer(player: proto.IPlayer, date: Date): string {
  const formatDate = dayjs(date).format(johnnyDb.DATE_TIME_FORMAT);
  return (
    `UPDATE ${table.TABLE_NAME} ` +
    `SET ` +
    `${table.NAME}=${player.name},` +
    `${table.ICON}=${player.icon},` +
    `${table.UPDATED_DATE_TIME}=${formatDate}` +
    ` WHERE ${table.ID}=${player.id}`
  );
}

function updateQueryForPlayerDetail(
  player: proto.IPlayerDetail,
  date: Date
): string {
  const formatDate = dayjs(date).format(johnnyDb.DATE_TIME_FORMAT);
  return (
    `UPDATE ${table.TABLE_NAME} ` +
    `SET ` +
    `${table.NAME}=${player.name},` +
    `${table.ICON}=${player.icon},` +
    `${table.INTRODUCTION}=${player.introduction},` +
    `${table.UPDATED_DATE_TIME}=${formatDate}` +
    ` WHERE ${table.ID}=${player.id}`
  );
}

function updateQueryForMail(
  playerId: string,
  mail: string,
  date: Date
): string {
  const formatDate = dayjs(date).format(johnnyDb.DATE_TIME_FORMAT);
  return (
    `UPDATE ${table.TABLE_NAME} ` +
    `SET ` +
    `${table.MAIL}=${mail},` +
    `${table.UPDATED_DATE_TIME}=${formatDate}` +
    ` WHERE ${table.ID}=${playerId}`
  );
}

function selectQuery(): string {
  return `SELECT * FROM ${table.TABLE_NAME}`;
}

function selectQueryById(playerId: string): string {
  return `${selectQuery()} WHERE ${table.ID}='${playerId}'`;
}

function buildPlayerObject(obj: object): proto.IPlayer {
  return new proto.Player({
    id: obj[table.ID],
    name: obj[table.NAME],
    icon: obj[table.ICON],
  });
}

function buildPlayerDetailObject(obj: object): proto.IPlayerDetail {
  return new proto.PlayerDetail({
    id: obj[table.ID],
    name: obj[table.NAME],
    icon: obj[table.ICON],
    introduction: obj[table.INTRODUCTION],
  });
}

function buildPlayersArray(objects: object[]): Array<proto.IPlayer> {
  if (!objects) {
    return [];
  }
  const values = new Array<proto.IPlayer>();
  for (const obj of objects) {
    values.push(buildPlayerObject(obj));
  }
  return values;
}

function getNotFoundError(playerId: string): ApiException {
  return new ApiException(
    proto.PercussionApiError.ErrorCode.DB_ERROR,
    `Player id=${playerId} is not found`,
    404
  );
}

function getMultiplePlayersFoundError(playerId: string): ApiException {
  return new ApiException(
    proto.PercussionApiError.ErrorCode.DB_ERROR,
    `Multiple players are found by id=${playerId}`,
    500
  );
}

export function insert(
  player: proto.IPlayer,
  mail: string,
  date: Date
): Promise<number> {
  return runSingleQuery(insertQuery(player, mail, date));
}

export function selectPlayers(): Promise<Array<proto.IPlayer>> {
  return runSelectQuery(selectQuery()).then((objects: Array<object>) =>
    buildPlayersArray(objects)
  );
}

export function selectPlayerById(playerId: string): Promise<proto.IPlayer> {
  return runSelectQuery(selectQueryById(playerId)).then(
    (objects: Array<object>) => {
      if (objects.length == 0) {
        throw getNotFoundError(playerId);
      } else if (objects.length > 1) {
        throw getMultiplePlayersFoundError(playerId);
      } else {
        return buildPlayerObject(objects[0]);
      }
    }
  );
}

export function selectPlayerDetailById(
  playerId: string
): Promise<proto.IPlayerDetail> {
  return runSelectQuery(selectQueryById(playerId)).then(
    (objects: Array<object>) => {
      if (objects.length == 0) {
        throw getNotFoundError(playerId);
      } else if (objects.length > 1) {
        throw getMultiplePlayersFoundError(playerId);
      } else {
        return buildPlayerDetailObject(objects[0]);
      }
    }
  );
}

export function updateEntryByPlayer(
  player: proto.IPlayer,
  date: Date
): Promise<number> {
  return runSingleQuery(updateQueryForPlayer(player, date));
}

export function updateEntryByPlayerDetail(
  playerDetail: proto.IPlayerDetail,
  date: Date
): Promise<number> {
  return runSingleQuery(updateQueryForPlayerDetail(playerDetail, date));
}

export function updateMailOfEntry(
  playerId: string,
  mail: string,
  date: Date
): Promise<number> {
  return runSingleQuery(updateQueryForMail(playerId, mail, date));
}

// MEMO:
// Deleting player is the special case when we should touch various table in one transaction
// (We should rollback if error happens during deletion)
// So, we should make independent file for delete process?
// export function deleteEntry(playerId: string) {

// }
