import { Request, Response, NextFunction } from "express";
import * as admin from "firebase-admin";
import { ApiException } from "../error/apiException";
import respondError from "../error/responsdError";
import { PercussionApiError } from "../proto/error_pb";
import { getFirebaseUser } from "../firebase/getUser";
import { getRequestType } from "../gateway/requestDataType";

export default function authenticate(
  auth: admin.auth.Auth
): (Request, Response, NextFunction) => void {
  return (request: Request, response: Response, next: NextFunction): void => {
    const token = request.headers["x-api-token"];
    const userId = request.headers["x-user-id"];
    const requestType = getRequestType(request.headers["content-type"]);

    if (!(token && userId)) {
      const authError = new ApiException(
        PercussionApiError.ErrorCode.AUTHENTICATION_ERROR,
        "No token or userId",
        401
      );
      respondError(response, authError, requestType);
      return;
    }

    const firebaseAuthError = new ApiException(
      PercussionApiError.ErrorCode.AUTHENTICATION_ERROR,
      "ログインに失敗しました",
      401
    );
    getFirebaseUser(auth)(token.toString())
      .then(firebaseUser => {
        if (firebaseUser.user.getId() == userId.toString()) {
          next();
        } else {
          respondError(response, firebaseAuthError, requestType);
        }
      })
      .catch(() => respondError(response, firebaseAuthError, requestType));
  };
}
