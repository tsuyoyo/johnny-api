import { pj } from "johnny-proto";
import proto = pj.sakuchin.percussion.proto;
import * as playerDb from "../database/player";

export function addPlayer(player: proto.IPlayer, mail: string) {
  return playerDb.insertPlayer(player, mail);
}

export function getPlayer(id: string): Promise<proto.IPlayer> {
  return playerDb.selectPlayerById(id);
}