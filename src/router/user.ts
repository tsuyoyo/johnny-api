import * as express from "express";
import * as signupUserService from "../service/user/signupUserService";
import * as admin from "firebase-admin";
import { getRequestType } from "../service/common/requestDataType";

function signup(
  request: express.Request,
  response: express.Response,
  defaultAuth: admin.auth.Auth
): void {
  const requestType = getRequestType(request);
  signupUserService.singup(
    defaultAuth,
    request,
    response,
    requestType
  );
}

export function provideUserRouter(
  defaultAuth: admin.auth.Auth
): express.Router {
  const router = express.Router();

  router.post("/signup", (request, response) =>
    signup(request, response, defaultAuth)
  );

  return router;
}
