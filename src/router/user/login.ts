import { Request, Response, Router } from "express";
import * as admin from "firebase-admin";
import * as userTable from "../../database/users";
import { getFirebaseUser } from "../../firebase/getUser";
import * as loginService from "../../service/login";
import { PostUserLoginResponse, PostUserLoginRequest } from "../../proto/userService_pb";
import { ApiException } from "../../error/apiException";
import { RequestWrapper } from "../../gateway/requestWrapper";
import { ResponseWrapper } from "../../gateway/responseWrapper";

function login(
  request: Request,
  response: Response,
  defaultAuth: admin.auth.Auth
): void {
  const responseWrapper = new ResponseWrapper<PostUserLoginResponse>(response);
  const requestWrapper = new RequestWrapper<PostUserLoginRequest>(
    request,
    PostUserLoginRequest.deserializeBinary
  );
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
