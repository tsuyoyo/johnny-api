import { Request, Response, NextFunction } from "express";
import * as admin from "firebase-admin";
import { ApiException } from "../error/apiException";
import respondError from "../error/responsdError";
import { PercussionApiError } from "../proto/error_pb";
import { getFirebaseUser } from "../firebase/getUser";

export default function authenticate(
  auth: admin.auth.Auth
): (Request, Response, NextFunction) => void {
  return (request: Request, response: Response, next: NextFunction): void => {
    const token = request.headers["x-api-token"];
    const userId = request.headers["x-user-id"];

    if (!(token && userId)) {
      const authError = new ApiException(
        PercussionApiError.ErrorCode.AUTHENTICATION_ERROR,
        "No token or userId",
        401
      );
      respondError(response, authError);
      return;
    }

    const firebaseAuthError = new ApiException(
      PercussionApiError.ErrorCode.AUTHENTICATION_ERROR,
      "ログインに失敗しました",
      401
    );
    getFirebaseUser(auth)(token.toString())
      .then((firebaseUser) => {
        console.log(
          `firebaseUserId : ${firebaseUser.user.getId()}, userId : ${userId}`
        );
        if (firebaseUser.user.getId().toString() == userId.toString()) {
          next();
        } else {
          respondError(response, firebaseAuthError);
        }
      })
      .catch(() => respondError(response, firebaseAuthError));
  };
}
