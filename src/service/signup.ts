import { noTokenError } from "../error/apiException";
import { SignupUserRequest, SignupUserResponse } from "../proto/userService_pb";
import { FirebaseUser } from "../firebase/getUser";
import { User } from "../proto/user_pb";

function getToken(request: SignupUserRequest): Promise<string> {
  return new Promise<string>((onResolve, onReject) => {
    const token = request.getToken();
    if (token && token.length > 0) {
      onResolve(token);
    } else {
      onReject(noTokenError("Valid firebase token is necessary at sign-in"));
    }
  });
}

export async function signup(
  request: SignupUserRequest,
  getFirebaseUser: (token: string) => Promise<FirebaseUser>,
  insertUser: (user: User, email: string) => Promise<User>
): Promise<SignupUserResponse> {
  return getToken(request)
    .then((token: string) => getFirebaseUser(token))
    .then((firebaseUser: FirebaseUser) =>
      insertUser(firebaseUser.user, firebaseUser.email)
    )
    .then((user: User) => {
      const signupResonse = new SignupUserResponse();
      signupResonse.setUser(user);
      return signupResonse;
    });
}
