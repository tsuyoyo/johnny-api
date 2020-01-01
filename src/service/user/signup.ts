import { PercussionApiError } from "../../proto/error_pb";
import { ApiException } from "../../error/apiException";
import {
  SignupUserRequest,
  SignupUserResponse
} from "../../proto/userService_pb";
import { FirebaseUser } from "../../firebase/getUser";
import { User } from "../../proto/user_pb";

function getToken(request: SignupUserRequest): Promise<string> {
  return new Promise<string>((onResolve, onReject) => {
    const token = request.getToken();
    if (token && token.length > 0) {
      onResolve(token);
    } else {
      onReject(
        new ApiException(
          PercussionApiError.ErrorCode.NO_TOKEN,
          "Valid firebase token is necessary at sign-in",
          401
        )
      );
    }
  });
}

export function signup(
  request: SignupUserRequest,
  getFirebaseUser: (token: string) => Promise<FirebaseUser>,
  registerUserToDatabase: (
    user: User,
    email: string,
    onRegisterSuccess: () => void,
    onRegisterFailed: (ApiException) => void
  ) => void
): Promise<SignupUserResponse> {
  return new Promise<SignupUserResponse>((onResolve, onReject) => {
    getToken(request)
      .then((token: string) => getFirebaseUser(token))
      .then((firebaseUser: FirebaseUser) => {
        const onRegisterSuccess = (): void => {
          const signupResonse = new SignupUserResponse();
          signupResonse.setUser(firebaseUser.user);
          onResolve(signupResonse);
        };
        registerUserToDatabase(
          firebaseUser.user,
          firebaseUser.email,
          onRegisterSuccess,
          onReject
        );
      });
  });
}
