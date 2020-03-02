import { Request, Response, Router } from "express";
import * as admin from "firebase-admin";
import * as userTable from "../../database/users";
import { getFirebaseUser } from "../../firebase/getUser";
import { getRequestType, RequestType } from "../../gateway/requestDataType";
import {
  getPostUserLoginRequestWrapper,
  getPostUserLoginResponseWrapper
} from "../../gateway/user";
import * as loginService from "../../service/login";
import { PostUserLoginResponse } from "../../proto/userService_pb";
import { ApiException } from "../../error/apiException";

function login(
  request: Request,
  response: Response,
  defaultAuth: admin.auth.Auth
): void {
  const reqType: RequestType = getRequestType(request);
  const responseWrapper = getPostUserLoginResponseWrapper(response, reqType);
  const requestWrapper = getPostUserLoginRequestWrapper(request);
  loginService
    .login(
      requestWrapper.deserializeData(),
      getFirebaseUser(defaultAuth),
      userTable.selectUserById
    )
    .then((res: PostUserLoginResponse) => responseWrapper.respondSuccess(res))
    .catch((error: ApiException) => responseWrapper.respondError(error));
}

export function provideUserLoginRouter(defaultAuth: admin.auth.Auth): Router {
  const router = Router();
  router.post("/", (request, response) =>
    login(request, response, defaultAuth)
  );
  return router;
}
