import { noTokenError } from "../error/apiException";
import { FirebaseUser } from "../firebase/getUser";

import * as $p from "../proto/compiled";
import proto = $p.pj.sakuchin.percussion.proto;

function getToken(request: proto.SignupUserRequest): Promise<string> {
  return new Promise<string>((onResolve, onReject) => {
    const token = request.token;
    if (token && token.length > 0) {
      onResolve(token);
    } else {
      onReject(noTokenError("Valid firebase token is necessary at sign-in"));
    }
  });
}

export async function signup(
  request: proto.SignupUserRequest,
  getFirebaseUser: (token: string) => Promise<FirebaseUser>,
  insertUser: (user: proto.IUser, email: string) => Promise<proto.IUser>
): Promise<proto.SignupUserResponse> {
  return getToken(request)
    .then((token: string) => getFirebaseUser(token))
    .then((firebaseUser: FirebaseUser) =>
      insertUser(firebaseUser.user, firebaseUser.email)
    )
    .then((user: proto.IUser) => {
      const signupResonse = new proto.SignupUserResponse({
        user: user,
      });
      // signupResonse.setUser(user);
      return signupResonse;
    });
}
