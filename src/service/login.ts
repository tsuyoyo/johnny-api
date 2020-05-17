import { noTokenError, authenticationError } from "../error/apiException";
import {
  PostUserLoginRequest,
  PostUserLoginResponse,
} from "../proto/userService_pb";
import { FirebaseUser } from "../firebase/getUser";
import { User } from "../proto/user_pb";

function getToken(request: PostUserLoginRequest): Promise<string> {
  return new Promise<string>((onResolve, onReject) => {
    const token = request.getToken();
    if (token && token.length > 0) {
      onResolve(token);
    } else {
      onReject(noTokenError("Valid firebase token is necessary at sign-in"));
    }
  });
}

export async function login(
  request: PostUserLoginRequest,
  getFirebaseUser: (token: string) => Promise<FirebaseUser>,
  getUser: (userId: string) => Promise<User>
): Promise<PostUserLoginResponse> {
  return getToken(request)
    .then((token: string) => getFirebaseUser(token))
    .then((firebaseUser: FirebaseUser) => getUser(firebaseUser.user.getId()))
    .then((user: User) => {
      const response = new PostUserLoginResponse();
      response.setUser(user);
      return response;
    })
    .catch((error) => {
      console.log(`Error : login service - ${error.message}`);
      throw authenticationError("Failed to authentication");
    });
}
