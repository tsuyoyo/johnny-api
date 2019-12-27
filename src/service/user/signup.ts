import * as mysqlService from "../database/mysqlService";
import * as admin from "firebase-admin";
import { User } from "../../proto/user_pb";
import { PercussionApiError } from "../../proto/error_pb";
import { ResponseWrapper } from "../../gateway/responseWrapper";
import { RequestWrapper } from "../../gateway/requestWrapper";
import {
  SignupUserRequest,
  SignupUserResponse
} from "../../proto/userService_pb";

function onAddUser(
  user: User,
  response: ResponseWrapper<SignupUserResponse>
): () => void {
  return (): void => {
    const signupResonse = new SignupUserResponse();
    signupResonse.setUser(user);
    response.respondSuccess(signupResonse);
  };
}

function onError(
  response: ResponseWrapper<SignupUserResponse>
): (PercussionApiError) => void {
  return (error: PercussionApiError): void => response.respondError(error, 403);
}

function makeUserInstance(userRecord: admin.auth.UserRecord): User {
  const user = new User();
  user.setId(userRecord.uid);
  user.setName(userRecord.displayName);
  user.setPhoto(userRecord.photoURL || "");
  return user;
}

export function signup(
  auth: admin.auth.Auth,
  request: RequestWrapper<SignupUserRequest>,
  response: ResponseWrapper<SignupUserResponse>
): void {
  const requestValues: SignupUserRequest = request.deserializeData();
  const token = requestValues.getToken();
  if (!token) {
    response.makeApiErrorAndRespond(
      PercussionApiError.ErrorCode.NO_TOKEN,
      "Valid firebase token is necessary at sign-in",
      401
    );
    return;
  }
  auth
    .verifyIdToken(token)
    .then((decodedToken: admin.auth.DecodedIdToken) =>
      auth.getUser(decodedToken.uid)
    )
    .then(function(userRecord: admin.auth.UserRecord) {
      const user = makeUserInstance(userRecord);
      mysqlService.addUser(
        user,
        userRecord.email,
        onAddUser(user, response),
        onError(response)
      );
    })
    .catch(function(error) {
      response.makeApiErrorAndRespond(
        PercussionApiError.ErrorCode.INVALID_FIREBASE_TOKEN,
        `Invalid firebase token - ${error}`,
        403
      );
    });
}
