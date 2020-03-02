import { Request, Response, Router } from "express";
import * as signupService from "../../service/signup";
import * as userTable from "../../database/users";
import {
  getSignupUserReqeustWrapper,
  getSignupUserResponseWrapper
} from "../../gateway/user";
import * as admin from "firebase-admin";
import { getRequestType, RequestType } from "../../gateway/requestDataType";
import { getFirebaseUser } from "../../firebase/getUser";
import { SignupUserResponse } from "../../proto/userService_pb";
import { ApiException } from "../../error/apiException";

function signup(
  request: Request,
  response: Response,
  defaultAuth: admin.auth.Auth
): void {
  const reqType: RequestType = getRequestType(request);
  const responseWrapper = getSignupUserResponseWrapper(response, reqType);
  const requestWrapper = getSignupUserReqeustWrapper(request, reqType);
  signupService
    .signup(
      requestWrapper.deserializeData(),
      getFirebaseUser(defaultAuth),
      userTable.insertUser
    )
    .then((res: SignupUserResponse) => responseWrapper.respondSuccess(res))
    .catch((error: ApiException) => responseWrapper.respondError(error));
}

export function provideUserSignupRouter(defaultAuth: admin.auth.Auth): Router {
  const router = Router();
  router.post("/", (request, response) =>
    signup(request, response, defaultAuth)
  );
  return router;
}
