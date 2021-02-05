import { Request, Response, Router } from "express";
import { FirebaseUser } from "../../firebase/verify";
import { pj } from "johnny-proto";
import proto = pj.sakuchin.percussion.proto;
import deserialize from "../../request/deserialize";
import { ResponseHandler } from "../../response/handler";

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
  const responseWrapper = new ResponseHandler<proto.PostUserLoginResponse>(
    request,
    response,
    proto.PostUserLoginResponse.encode,
  );

  // TODO : deserialize request

  // TODO : Call login server

  // TODO : respond result
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
