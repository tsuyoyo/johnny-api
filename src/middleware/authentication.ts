import { Request, Response, NextFunction } from "express";
import * as admin from "firebase-admin";
import { authorizationError } from "../error/apiException";

function pullFirebaseToken(request: Request): string {
  return (
    request.body.token ||
    request.query.token ||
    request.headers["x-access-token"]
  );
}

export function authenticate(
  auth: admin.auth.Auth
): (Request, Response, NextFunction) => void {
  return (request: Request, response: Response, next: NextFunction): void => {
    const firebaseToken = pullFirebaseToken(request);
    if (firebaseToken) {
      auth
        .verifyIdToken(firebaseToken)
        .then(() => next())
        .catch(error => response.send(authorizationError(error.message)));
    } else {
      response.send(authorizationError("token is missing"));
    }
  };
}
