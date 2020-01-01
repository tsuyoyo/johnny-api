import * as mysqlService from "../database/mysqlService";
import { PercussionApiError } from "../../proto/error_pb";
import { ApiException } from "../../error/apiException";
import {
  SignupUserRequest,
  SignupUserResponse
} from "../../proto/userService_pb";
import { FirebaseUser } from "../../firebase/getUser";

function registerUser(
  firebaseUser: FirebaseUser,
  onSuccess: (SignupUserRequest) => void,
  onError: (ApiException) => void
): void {
  mysqlService.addUser(
    firebaseUser.user,
    firebaseUser.email,
    () => {
      const signupResonse = new SignupUserResponse();
      signupResonse.setUser(firebaseUser.user);
      onSuccess(signupResonse);
    },
    (e: PercussionApiError) => {
      onError(new ApiException(e.getErrorcode(), e.getMessage(), 403));
    }
  );
}

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
  onSuccess: (SignupUserResponse) => void,
  onError: (ApiException) => void
): void {
  getToken(request)
    .then((token: string) => getFirebaseUser(token))
    .then((user: FirebaseUser) => registerUser(user, onSuccess, onError))
    .catch(error => {
      if (error instanceof ApiException) {
        onError(error);
      }
    });
}

export function sample(
  isSuccess: boolean,
  n: number,
  onSuccess: (number) => void,
  onError: (number) => void
) {
  if (isSuccess) {
    onSuccess(n * 2);
  } else {
    onError(n * 3);
  }
}
