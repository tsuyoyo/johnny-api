import { FirebaseUser } from "../firebase/verify";
import * as playerRepository from "../repository/player";
import { authenticationError } from "../error/apiException";
import { pj } from "johnny-proto";
import proto = pj.sakuchin.percussion.proto;

export function login(
  request: proto.IPostLoginRequest,
  verifyToken: (token: string) => Promise<FirebaseUser>
): Promise<proto.IPostLoginResponse> {
  return verifyToken(request.token)
    .then((fbUser: FirebaseUser) =>
      playerRepository.getPlayer(fbUser.player.id)
    )
    .then((player: proto.IPlayer) => new proto.PostLoginResponse({ player }))
    .catch((error) => {
      console.log(`Error : login service - ${error.message}`);
      throw authenticationError("Failed to authentication");
    });
}
