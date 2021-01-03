import { Request, Response, Router } from "express";
import * as signupService from "../../service/signup";
import * as userTable from "../../database/users";
import { FirebaseUser } from "../../firebase/verify";
import { ApiException } from "../../error/apiException";
import { pj } from "johnny-proto";
import deserializeRequest from "../../request/deserialize";
import { ResponseHandler } from "../../response/handler";
import proto = pj.sakuchin.percussion.proto;

function signup(
  request: Request,
  response: Response,
  verifyToken: (token: string) => Promise<FirebaseUser>,
): void {
  const responseWrapper = new ResponseHandler<proto.SignupUserResponse>(
    request, response, proto.SignupUserResponse.encode
  );
  signupService
    .signup(
      deserializeRequest(
        request, 
        proto.SignupUserRequest.decode, 
        proto.SignupUserRequest.fromObject,
      ),
      verifyToken,
      userTable.insertUser,
    )
    .then((res: proto.SignupUserResponse) => responseWrapper.respondSuccess(res))
    .catch((error: ApiException) => responseWrapper.respondError(error));
}

export function provideUserSignupRouter(
  verifyToken: (token: string) => Promise<FirebaseUser>,
): Router {
  const router = Router();
  router.post("/", (request, response) =>
    signup(request, response, verifyToken)
  );
  return router;
}
