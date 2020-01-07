import { Request, Response, Router } from "express";
import * as signupService from "../service/signup";
import {
  getSignupUserReqeustWrapper,
  getSignupUserResponseWrapper
} from "../gateway/signup";
import * as admin from "firebase-admin";
import { getRequestType, RequestType } from "../gateway/requestDataType";
import { getFirebaseUser } from "../firebase/getUser";
import { SignupUserResponse } from "../proto/userService_pb";
import { ApiException } from "../error/apiException";
import * as userTable from "../database/users";

function signup(
  request: Request,
  response: Response,
  defaultAuth: admin.auth.Auth
): void {
  const reqType: RequestType = getRequestType(request.headers["content-type"]);
  const responseWrapper = getSignupUserResponseWrapper(response, reqType);
  const requestWrapper = getSignupUserReqeustWrapper(request, reqType);
  signupService
    .signup(
      requestWrapper.deserializeData(),
      getFirebaseUser(defaultAuth),
      userTable.addUser
    )
    .then((res: SignupUserResponse) => responseWrapper.respondSuccess(res))
    .catch((error: ApiException) => responseWrapper.respondError(error));
}

export function provideUserRouter(defaultAuth: admin.auth.Auth): Router {
  const router = Router();
  router.post("/signup", (request, response) =>
    signup(request, response, defaultAuth)
  );
  return router;
}
