import { Request, Response, Router } from "express";
import * as admin from "firebase-admin";
import * as userTable from "../../database/users";
import { getFirebaseUser } from "../../firebase/getUser";
import * as loginService from "../../service/login";
import { ApiException } from "../../error/apiException";
import { ResponseHandler } from "../../response/handler";
import deserialize from "../../request/deserialize";
import { pj } from "../../proto/compiled";
import proto = pj.sakuchin.percussion.proto;

function login(
  request: Request,
  response: Response,
  defaultAuth: admin.auth.Auth
): void {
  const responseWrapper = new ResponseHandler<proto.PostUserLoginResponse>(
    request,
    response,
    proto.PostUserLoginResponse.encode,
  );
  const loginRequest = deserialize(
    request, proto.PostUserLoginRequest.decode, proto.PostUserLoginRequest.fromObject
  );
  loginService
    .login(
      loginRequest,
      getFirebaseUser(defaultAuth),
      userTable.selectUserById,
    )
    .then((res: proto.PostUserLoginResponse) => responseWrapper.respondSuccess(res))
    .catch((error: ApiException) => responseWrapper.respondError(error));
}

export function provideUserLoginRouter(defaultAuth: admin.auth.Auth): Router {
  const router = Router();
  router.post("/", (request, response) =>
    login(request, response, defaultAuth)
  );
  return router;
}
