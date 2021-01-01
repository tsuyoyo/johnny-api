import { noTokenError } from "../error/apiException";
import { FirebaseUser } from "../firebase/verify";

import * as $p from "johnny-proto";
import proto = $p.pj.sakuchin.percussion.proto;

export async function signup(
  request: proto.SignupUserRequest,
  verifyFirebaseToken: (token: string) => Promise<FirebaseUser>,
  insertUser: (user: proto.IUser, email: string) => Promise<proto.IUser>
): Promise<proto.SignupUserResponse> {
  return new Promise<string>((onResolve, onReject) => {
    if (request.token && request.token.length > 0) {
      onResolve(request.token);
    } else {
      onReject(noTokenError("Valid firebase token is necessary at sign-in"));
    }
  })
    .then((token: string) => verifyFirebaseToken(token))
    .then((firebaseUser: FirebaseUser) =>
      insertUser(firebaseUser.user, firebaseUser.email)
    )
    .then(
      (user: proto.IUser) =>
        new proto.SignupUserResponse({
          user: user,
        })
    );
}
