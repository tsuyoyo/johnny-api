import * as express from "express";
import * as mysqlService from "../database/mysqlService";
import { ApiError, ErrorCode } from "../../error/apiError";
import * as admin from "firebase-admin";
import { User } from "../../proto/user_pb";

export function signupUser(
  auth: admin.auth.Auth,
  request: express.Request,
  response: express.Response,
  _next: express.NextFunction
): void {
  const token =
    request.body.token ||
    request.query.token ||
    request.headers["x-access-token"];

  if (!token) {
    response
      .status(401)
      .send(
        new ApiError(
          ErrorCode.NO_TOKEN,
          "Valid firebase token is necessary at sign-in"
        )
      );
    return;
  }
  auth
    .verifyIdToken(token)
    .then((decodedToken: admin.auth.DecodedIdToken) =>
      auth.getUser(decodedToken.uid)
    )
    .then(function(userRecord: admin.auth.UserRecord) {
      const user = new User();
      user.setId(userRecord.uid);
      user.setName(userRecord.displayName);
      user.setPhoto(userRecord.photoURL || "");

      console.log(`serialize - ${user.serializeBinary()}`);
      mysqlService.addUser(
        user,
        userRecord.email,
        () => response.status(200).send(Buffer.from(user.serializeBinary())),
        (error: ApiError) => response.status(401).send(error)
      );
    })
    .catch(function(error) {
      response
        .status(403)
        .send(
          new ApiError(
            ErrorCode.INVALID_FIREBASE_TOKEN,
            `Invalid firebase token - ${error}`
          )
        );
    });
}
