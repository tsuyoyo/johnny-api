import { noTokenError, authenticationError } from "../error/apiException";
import { FirebaseUser } from "../firebase/getUser";
import { pj } from "../proto/compiled";
import proto = pj.sakuchin.percussion.proto;

function getToken(request: proto.PostUserLoginRequest): Promise<string> {
  return new Promise<string>((onResolve, onReject) => {
    const token = request.token;
    if (token && token.length > 0) {
      onResolve(token);
    } else {
      onReject(noTokenError("Valid firebase token is necessary at sign-in"));
    }
  });
}

export async function login(
  request: proto.PostUserLoginRequest,
  getFirebaseUser: (token: string) => Promise<FirebaseUser>,
  getUser: (userId: string) => Promise<proto.IUser>
): Promise<proto.PostUserLoginResponse> {
  return getToken(request)
    .then((token: string) => getFirebaseUser(token))
    .then((firebaseUser: FirebaseUser) => getUser(firebaseUser.user.id))
    .then((user: proto.IUser) => {
      return new proto.PostUserLoginResponse({
        user: user,
      });
    })
    .catch((error) => {
      console.log(`Error : login service - ${error.message}`);
      throw authenticationError("Failed to authentication");
    });
}
