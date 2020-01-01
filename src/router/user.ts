import { Request, Response, Router } from "express";
import * as signupService from "../service/user/signup";
import {
  getSignupUserReqeustWrapper,
  getSignupUserResponseWrapper
} from "../gateway/user/signup";
import * as admin from "firebase-admin";
import { getRequestType, RequestType } from "../gateway/requestDataType";
import { getFirebaseUser } from "../firebase/getUser";
import * as mysqlService from "../service/database/mysqlService";

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
      mysqlService.addUser
    )
    .then(responseWrapper.respondSuccess)
    .catch(responseWrapper.respondError);
}

export function provideUserRouter(defaultAuth: admin.auth.Auth): Router {
  const router = Router();
  router.post("/signup", (request, response) =>
    signup(request, response, defaultAuth)
  );
  return router;
}
