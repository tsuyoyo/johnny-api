import { authenticationError } from "../error/apiException";
import { FirebaseUser } from "../firebase/verify";
import * as playerTable from "../database/player";
import { pj } from "johnny-proto";
import proto = pj.sakuchin.percussion.proto;

export async function login(
  request: proto.IPostLoginRequest,
  verifyFirebaseToken: (token: string) => Promise<FirebaseUser>
): Promise<proto.IPostLoginResponse> {
  return verifyFirebaseToken(request.token)
    .then((firebaseUser: FirebaseUser) =>
      playerTable.selectPlayerById(firebaseUser.user.id)
    )
    .then((player: proto.IPlayer) => new proto.PostLoginResponse({ player }))
    .catch((error) => {
      console.log(`Error : login service - ${error.message}`);
      throw authenticationError("Failed to authentication");
    });
}
