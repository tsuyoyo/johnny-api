import { noTokenError } from "../error/apiException";
import { FirebaseUser } from "../firebase/verify";
import * as playerRepository from "../repository/player";
import * as $p from "johnny-proto";
import proto = $p.pj.sakuchin.percussion.proto;

function verifyRequestToken(token: string) {
  return new Promise<string>((onResolve, onReject) => {
    if (token && token.length > 0) {
      onResolve(token);
    } else {
      onReject(noTokenError("Valid firebase token is necessary at sign-in"));
    }
  });
}

export function signup(
  request: proto.ISignupUserRequest,
  verifyFirebaseToken: (token: string) => Promise<FirebaseUser>
): Promise<proto.IPostSignupResponse> {
  return verifyRequestToken(request.token)
    .then((token: string) => verifyFirebaseToken(token))
    .then((firebaseUser: FirebaseUser) =>
      playerRepository
        .addPlayer(firebaseUser.player, firebaseUser.email)
        .then(() => new proto.PostSignupResponse({ player: firebaseUser.player }))
    )
}
