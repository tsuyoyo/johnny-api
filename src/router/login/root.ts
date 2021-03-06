import { Request, Response, Router } from "express";
import { FirebaseUser } from "../../firebase/verify";
import { pj } from "johnny-proto";
import proto = pj.sakuchin.percussion.proto;
import deserialize from "../../request/deserialize";
import { ResponseHandler } from "../../response/handler";
import * as loginHandler from "../../handler/login"
import { ApiException } from "../../error/apiException";

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
) {
  const loginRequest = deserializePostUserLoginRequest(request)
  const responseHandler = new ResponseHandler<proto.IPostLoginResponse>(
    request, response, proto.PostLoginResponse.encode
  );
  loginHandler.login(loginRequest, verifyToken)
    .then((res: proto.IPostLoginResponse) => responseHandler.respondSuccess(res))
    .catch((err: ApiException) => responseHandler.respondError(err))
}

export function provideLoginRouter(
  verifyToken: (token: string) => Promise<FirebaseUser>,
): Router {
  const router = Router();
  router.post("/", (request, response) => login(request, response, verifyToken));
  return router;
}
