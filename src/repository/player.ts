import { pj } from "johnny-proto";
import proto = pj.sakuchin.percussion.proto;
import * as playerDb from "../database/player";

export function addPlayer(
  player: proto.IPlayer,
  mail: string,
  date: Date
): Promise<number> {
  return playerDb.insert(player, mail, date);
}

export function getPlayer(id: string): Promise<proto.IPlayer> {
  return playerDb.selectPlayerById(id);
}
