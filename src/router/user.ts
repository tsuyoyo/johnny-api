import * as express from "express";
import { signupUser } from "../service/user/signupUserService";
import { RequestWrapper } from "../service/common/requestWrapper";
import { ResponseWrapper } from "../service/common/responseWrapper";
import * as admin from "firebase-admin";
import { SignupUserRequest, SignupUserResponse } from "../proto/userService_pb";
import { getRequestType } from "../service/common/requestDataType";

function signup(
  request: express.Request,
  response: express.Response,
  defaultAuth: admin.auth.Auth
): void {
  signupUser(
    defaultAuth,
    new RequestWrapper<SignupUserRequest>(
      request,
      getRequestType(request),
      SignupUserRequest.deserializeBinary,
      (json: object) => {
        // TODO : ちゃんとする
        const userRequest = new SignupUserRequest();
        return userRequest;
        // const user = new User();
        // user.setId(json["aa"]);
        // return user;
      }
    ),
    new ResponseWrapper<SignupUserResponse>(response, getRequestType(request))
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
