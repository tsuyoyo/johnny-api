import { authenticationError } from "../error/apiException";
import { FirebaseUser } from "../firebase/verify";
import { pj } from "../proto/compiled";
import proto = pj.sakuchin.percussion.proto;

export async function login(
  request: proto.PostUserLoginRequest,
  verifyFirebaseToken: (token: string) => Promise<FirebaseUser>,
  selectUserById: (userId: string) => Promise<proto.IUser>
): Promise<proto.PostUserLoginResponse> {
  return verifyFirebaseToken(request.token)
    .then((firebaseUser: FirebaseUser) => selectUserById(firebaseUser.user.id))
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
