import { Request, Response, Router } from "express";
import * as signupService from "../../service/signup";
import * as userTable from "../../database/users";
import * as admin from "firebase-admin";
import { getFirebaseUser } from "../../firebase/getUser";
import { ApiException } from "../../error/apiException";
import { pj } from "../../proto/compiled";
import deserializeRequest from "../../request/deserialize";
import { ResponseHandler } from "../../response/handler";
import proto = pj.sakuchin.percussion.proto;

function signup(
  request: Request,
  response: Response,
  defaultAuth: admin.auth.Auth
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
      getFirebaseUser(defaultAuth),
      userTable.insertUser,
    )
    .then((res: proto.SignupUserResponse) => responseWrapper.respondSuccess(res))
    .catch((error: ApiException) => responseWrapper.respondError(error));
}

export function provideUserSignupRouter(defaultAuth: admin.auth.Auth): Router {
  const router = Router();
  router.post("/", (request, response) =>
    signup(request, response, defaultAuth)
  );
  return router;
}
