import { Request, Response, Router } from "express";
import { FirebaseUser } from "../../firebase/verify";
import { pj } from "johnny-proto";
import proto = pj.sakuchin.percussion.proto;
import deserialize from "../../request/deserialize";
import { ResponseHandler } from "../../response/handler";
import * as signupHandler from "../../handler/signup"
import { ApiException } from "../../error/apiException";


function deserializePostSignupRequest(request: Request) {
  return deserialize(
    request,
    proto.PostSignupRequest.decode,
    proto.PostSignupRequest.fromObject,
  );
}

function signup(
  request: Request,
  response: Response,
  verifyToken: (token: string) => Promise<FirebaseUser>,
) {
  const signupRequest = deserializePostSignupRequest(request);
  const responseHandler = new ResponseHandler<proto.IPostSignupResponse>(
    request, response, proto.PostLoginResponse.encode,
  )
  signupHandler.signup(signupRequest, verifyToken)
    .then((res: proto.IPostSignupResponse) => responseHandler.respondSuccess(res))
    .catch((err: ApiException) => responseHandler.respondError(err))
}

export function provideSignupRouter(
  verifyToken: (token: string) => Promise<FirebaseUser>,
): Router {
  const router = Router()
  router.post("/", (request, response) => signup(request, response, verifyToken))
  return router;
}