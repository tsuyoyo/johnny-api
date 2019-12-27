import { Request, Response, Router } from "express";
import * as signupService from "../service/user/signup";
import * as signupGateway from "../gateway/user/signup";
import * as admin from "firebase-admin";
import { getRequestType } from "../gateway/requestDataType";

function signup(
  request: Request,
  response: Response,
  defaultAuth: admin.auth.Auth
): void {
  const reqType = getRequestType(request.headers["content-type"]);
  signupService.signup(
    defaultAuth,
    signupGateway.getSignupUserReqeustWrapper(request, reqType),
    signupGateway.getSignupUserResponseWrapper(response, reqType)
  );
}

export function provideUserRouter(defaultAuth: admin.auth.Auth): Router {
  const router = Router();
  router.post("/signup", (request, response) =>
    signup(request, response, defaultAuth)
  );
  return router;
}
