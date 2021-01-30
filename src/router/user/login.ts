import { Request, Response, Router } from "express";
import * as userTable from "../../database/users";
import { FirebaseUser } from "../../firebase/verify";
import * as loginService from "../../service/login";
import { ApiException } from "../../error/apiException";
import { ResponseHandler } from "../../response/handler";
import deserialize from "../../request/deserialize";
import { pj } from "johnny-proto";
import proto = pj.sakuchin.percussion.proto;

function deserializePostUserLoginRequest(request: Request) {
  return deserialize(
    request, 
    proto.PostUserLoginRequest.decode, 
    proto.PostUserLoginRequest.fromObject
  );
}

function login(
  request: Request,
  response: Response,
  verifyToken: (token: string) => Promise<FirebaseUser>,
): void {
  const responseWrapper = new ResponseHandler<proto.PostUserLoginResponse>(
    request,
    response,
    proto.PostUserLoginResponse.encode,
  );
  loginService
    .login(
      deserializePostUserLoginRequest(request),
      verifyToken,
      userTable.selectUserById
    )
    .then((res: proto.PostUserLoginResponse) => responseWrapper.respondSuccess(res))
    .catch((error: ApiException) => responseWrapper.respondError(error));
}

export function provideLoginRouter(
  verifyToken: (token: string) => Promise<FirebaseUser>,
): Router {
  const router = Router();
  router.post("/", (request, response) =>
    login(request, response, verifyToken)
  );
  return router;
}
