import * as admin from "firebase-admin";
import { User } from "../proto/user_pb";
import { PercussionApiError } from "../proto/error_pb";
import { ApiException } from "../error/apiException";

export class FirebaseUser {
  readonly user: User;
  readonly email: string;

  constructor(user: User, email: string) {
    this.user = user;
    this.email = email;
  }
}

export function getFirebaseUser(
  auth: admin.auth.Auth
): (token: string) => Promise<FirebaseUser> {
  return (token: string): Promise<FirebaseUser> =>
    new Promise<FirebaseUser>((onResolve, onReject) => {
      auth
        .verifyIdToken(token)
        .then((decodedIdToken: admin.auth.DecodedIdToken) =>
          auth.getUser(decodedIdToken.uid)
        )
        .then((userRecord: admin.auth.UserRecord) => {
          const user = new User();
          user.setId(userRecord.uid);
          user.setName(userRecord.displayName);
          user.setPhoto(userRecord.photoURL || "");
          onResolve(new FirebaseUser(user, userRecord.email));
        })
        .catch(error => {
          const apiException = new ApiException(
            PercussionApiError.ErrorCode.INVALID_FIREBASE_TOKEN,
            `Invalid firebase token - ${error}`,
            403
          );
          onReject(apiException);
        });
    });
}
