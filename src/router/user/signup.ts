import { Request, Response, Router } from "express";
import * as signupService from "../../service/signup";
import * as userTable from "../../database/users";
import * as admin from "firebase-admin";
import { getFirebaseUser } from "../../firebase/getUser";
import {
  SignupUserResponse,
  SignupUserRequest,
} from "../../proto/userService_pb";
import { ApiException } from "../../error/apiException";
import { RequestWrapper } from "../../gateway/requestWrapper";
import { ResponseWrapper } from "../../gateway/responseWrapper";

function signup(
  request: Request,
  response: Response,
  defaultAuth: admin.auth.Auth
): void {
  const requestWrapper = new RequestWrapper<SignupUserRequest>(
    request,
    SignupUserRequest.deserializeBinary
  );
  const responseWrapper = new ResponseWrapper<SignupUserResponse>(response);
  signupService
    .signup(
      requestWrapper.deserializeData(),
      getFirebaseUser(defaultAuth),
      userTable.insertUser
    )
    .then((res: SignupUserResponse) => responseWrapper.respondSuccess(res))
    .catch((error: ApiException) => responseWrapper.respondError(error));
}

export function provideUserSignupRouter(defaultAuth: admin.auth.Auth): Router {
  const router = Router();
  router.post("/", (request, response) =>
    signup(request, response, defaultAuth)
  );
  return router;
}
