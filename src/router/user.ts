import * as express from "express";
import * as signupUserService from "../service/user/signupUserService";
import * as admin from "firebase-admin";
import { getRequestType } from "../service/common/requestDataType";

function signup(
  request: express.Request,
  response: express.Response,
  defaultAuth: admin.auth.Auth
): void {
  signupUserService.singup(
    defaultAuth,
    request,
    response,
    getRequestType(request.headers["content-type"])
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
