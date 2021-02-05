import { runQuery } from "./mysqlWrapper";
import { ApiException } from "../error/apiException";
import { pj } from "johnny-proto";
import proto = pj.sakuchin.percussion.proto;

const USER_TABLE = "users";

export function insertPlayer(
  player: proto.IPlayer,
  mail: string,
): Promise<proto.IPlayer> {
  return new Promise<proto.IPlayer>((onResolve, onReject) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    runQuery(
      insertQuery(player, mail),
      (err, _rows, _fields) => {
        if (err) {
          onReject(err);
        } else {
          onResolve(player);
        }
      }
    );
  });
}

export function selectPlayerById(playerId: string): Promise<proto.IPlayer> {
  return new Promise<proto.IPlayer>((onResolve, onReject) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    runQuery(
      selectQuery(playerId),
      (err, rows, _fields) => {
        if (err) {
          onReject(err);
        } else if (rows.length > 0) {
          console.log(`selectPlayerById - onSelectPlayer`);
          onResolve(getPlayerFromObj(rows[0]));
        } else {
          onReject(getNotFoundError(playerId));
        }
      }
    );
  });
}

function insertQuery(player: proto.IPlayer, mail: string) {
  return `INSERT INTO ${USER_TABLE} ` +
    `VALUES ('${player.id}','${player.name}','${player.icon}','${mail}')`;
}

function selectQuery(playerId: string) {
  return `SELECT * FROM ${USER_TABLE} WHERE id="${playerId}"`;
}

function getPlayerFromObj(obj: object): proto.IPlayer {
  const player = new proto.Player();
  player.id = obj["id"];
  player.name = obj["name"];
  player.icon = obj["photo_url"];
  return player;
}

function getNotFoundError(playerId: string): ApiException {
  return new ApiException(
    proto.PercussionApiError.ErrorCode.DB_ERROR,
    `Player id=${playerId} is not found`,
    404
  );
}
