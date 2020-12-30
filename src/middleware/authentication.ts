import { Request, Response, NextFunction } from "express";
import { ApiException } from "../error/apiException";
import { respondError } from "../error/responsdError";
import { FirebaseUser } from "../firebase/verify";
import { pj } from "../proto/compiled";
import proto = pj.sakuchin.percussion.proto;

export function authenticate(
  verifyToken: (token: string) => Promise<FirebaseUser>
): (Request, Response, NextFunction) => void {
  return (request: Request, response: Response, next: NextFunction): void => {
    const token = request.headers["x-api-token"];
    const userId = request.headers["x-user-id"];

    if (!(token && userId)) {
      const authError = new ApiException(
        proto.PercussionApiError.ErrorCode.LOGIN_REQUIRED,
        "Loginしてください",
        401
      );
      respondError(response, authError);
      return;
    }

    const firebaseAuthError = new ApiException(
      proto.PercussionApiError.ErrorCode.AUTHENTICATION_ERROR,
      "再認証してください",
      401
    );
    verifyToken(token.toString())
      .then((firebaseUser) => {
        console.log(
          `firebaseUserId : ${firebaseUser.user.id}, userId : ${userId}`
        );
        if (firebaseUser.user.id.toString() == userId.toString()) {
          next();
        } else {
          respondError(response, firebaseAuthError);
        }
      })
      .catch(() => respondError(response, firebaseAuthError));
  };
}
