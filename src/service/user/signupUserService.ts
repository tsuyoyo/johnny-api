import * as mysqlService from "../database/mysqlService";
import * as admin from "firebase-admin";
import { User } from "../../proto/user_pb";
import { PercussionApiError } from "../../proto/error_pb";
import { ResponseWrapper } from "../common/responseWrapper";
import { RequestWrapper } from "../common/requestWrapper";
import {
  SignupUserRequest,
  SignupUserResponse
} from "../../proto/userService_pb";
import { RequestType } from "../common/requestDataType";
import { Request, Response } from "express";

function doSignup(
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

  function onAddUser(user: User): () => void {
    return (): void => {
      const signupResonse = new SignupUserResponse();
      signupResonse.setUser(user);
      response.respondSuccess(signupResonse);
    };
  }

  function onError(): (error: PercussionApiError) => void {
    return (error: PercussionApiError): void =>
      response.respondError(error, 403);
  }

  function makeUserInstance(userRecord: admin.auth.UserRecord): User {
    const user = new User();
    user.setId(userRecord.uid);
    user.setName(userRecord.displayName);
    user.setPhoto(userRecord.photoURL || "");
    return user;
  }

  auth
    .verifyIdToken(token)
    .then((decodedToken: admin.auth.DecodedIdToken) =>
      auth.getUser(decodedToken.uid)
    )
    .then(function(userRecord: admin.auth.UserRecord) {
      const user = makeUserInstance(userRecord);
      mysqlService.addUser(user, userRecord.email, onAddUser(user), onError);
    })
    .catch(function(error) {
      response.makeApiErrorAndRespond(
        PercussionApiError.ErrorCode.INVALID_FIREBASE_TOKEN,
        `Invalid firebase token - ${error}`,
        403
      );
    });
}

function convertObjectToSingupUserRequest(obj: object): SignupUserRequest {
  const response = new SignupUserRequest();
  response.setToken(obj["token"]);
  return response;
}

function getReqeustWrapper(
  request: Request,
  requestType: RequestType
): RequestWrapper<SignupUserRequest> {
  return new RequestWrapper<SignupUserRequest>(
    request,
    requestType,
    SignupUserRequest.deserializeBinary,
    convertObjectToSingupUserRequest
  );
}
function getResponseWrapper(
  response: Response,
  requestType: RequestType
): ResponseWrapper<SignupUserResponse> {
  return new ResponseWrapper<SignupUserResponse>(response, requestType);
}

export function singup(
  auth: admin.auth.Auth,
  request: Request,
  response: Response,
  requestType: RequestType
): void {
  doSignup(
    auth,
    getReqeustWrapper(request, requestType),
    getResponseWrapper(response, requestType)
  );
}
