import * as dayjs from "dayjs";
import { runSelectQuery, runSingleQuery } from "./mysqlWrapper";
import { ApiException } from "../error/apiException";
import { pj } from "johnny-proto";
import proto = pj.sakuchin.percussion.proto;
import { johnnyDb } from "./fields";
import table = johnnyDb.tables.PLAYER;

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
  return (objects) ? objects.map((obj) => buildPlayerObject(obj)) : [];
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
  const query = `INSERT INTO ${table.TABLE_NAME} ` +
  `(` +
  `${table.ID},` +
  `${table.NAME},` +
  `${table.ICON},` +
  `${table.MAIL},` +
  `${table.REGISTERED_DATE_TIME},` +
  `${table.UPDATED_DATE_TIME}` +
  `) VALUES (?,?,?,?,?,?)`;
  const formatDate = dayjs(date).format(johnnyDb.DATE_TIME_FORMAT);
  const values = [
    player.id,
    player.name,
    player.name,
    mail,
    formatDate,
    formatDate
  ];
  return runSingleQuery(query, values);
}

export function selectPlayers(): Promise<Array<proto.IPlayer>> {
  const query = `SELECT * FROM ${table.TABLE_NAME}`;
  const values = [];
  return runSelectQuery(query, values)
    .then((objects: Array<object>) => buildPlayersArray(objects));
}

export function selectPlayerById(playerId: string): Promise<proto.IPlayer> {
  const query = `SELECT * FROM ${table.TABLE_NAME} WHERE ${table.ID}=?`;
  const values = [playerId];
  return runSelectQuery(query, values).then(
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
  const query = `SELECT * FROM ${table.TABLE_NAME} WHERE ${table.ID}=?`
  const values = [playerId];
  return runSelectQuery(query, values).then(
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
  const formatDate = dayjs(date).format(johnnyDb.DATE_TIME_FORMAT);
  const query = `UPDATE ${table.TABLE_NAME} ` +
  `SET ` +
  `${table.NAME}=?,` +
  `${table.ICON}=?,` +
  `${table.UPDATED_DATE_TIME}=?` +
  ` WHERE ${table.ID}=?`
  const values = [player.name, player.icon, formatDate, player.id]
  return runSingleQuery(query, values);
}

export function updateEntryByPlayerDetail(
  playerDetail: proto.IPlayerDetail,
  date: Date
): Promise<number> {
  const query = `UPDATE ${table.TABLE_NAME} ` +
  `SET ` +
  `${table.NAME}=?,` +
  `${table.ICON}=?,` +
  `${table.INTRODUCTION}=?,` +
  `${table.UPDATED_DATE_TIME}=?` +
  ` WHERE ${table.ID}=?`;
  const values = [
    playerDetail.name,
    playerDetail.icon,
    playerDetail.introduction,
    dayjs(date).format(johnnyDb.DATE_TIME_FORMAT),
    playerDetail.id,
  ]
  return runSingleQuery(query, values);
}

export function updateMailOfEntry(
  playerId: string,
  mail: string,
  date: Date
): Promise<number> {
  const query = `UPDATE ${table.TABLE_NAME} ` +
  `SET ` +
  `${table.MAIL}=?,` +
  `${table.UPDATED_DATE_TIME}=?` +
  ` WHERE ${table.ID}=?`;
  const values = [
    mail,
    dayjs(date).format(johnnyDb.DATE_TIME_FORMAT),
    playerId,
  ];
  return runSingleQuery(query, values);
}

// MEMO:
// Deleting player is the special case when we should touch various table in one transaction
// (We should rollback if error happens during deletion)
// So, we should make independent file for delete process?
// export function deleteEntry(playerId: string) {

// }
