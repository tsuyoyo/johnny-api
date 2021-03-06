import * as admin from "firebase-admin";
import { ApiException } from "../error/apiException";
import { pj } from "johnny-proto";
import proto = pj.sakuchin.percussion.proto;

export class FirebaseUser {
  readonly player: proto.IPlayer;
  readonly email: string;

  constructor(user: proto.IPlayer, email: string) {
    this.player = user;
    this.email = email;
  }
}

export function verifyToken(
  verifyIdToken: (token: string) => Promise<admin.auth.DecodedIdToken>,
  getUser: (uid: string) => Promise<admin.auth.UserRecord>
): (token: string) => Promise<FirebaseUser> {
  return (token: string): Promise<FirebaseUser> =>
    verifyIdToken(token)
      .then((decodedIdToken: admin.auth.DecodedIdToken) =>
        getUser(decodedIdToken.uid)
      )
      .then((userRecord: admin.auth.UserRecord) => {
        const player = new proto.Player({
          id: userRecord.uid,
          name: userRecord.displayName,
          icon: userRecord.photoURL || "",
        });
        return new FirebaseUser(player, userRecord.email);
      })
      .catch((error) => {
        console.log(`Failed to get firebase user - ${error.message}`);
        throw new ApiException(
          proto.PercussionApiError.ErrorCode.INVALID_FIREBASE_TOKEN,
          `Invalid firebase token - ${error.message}`,
          403
        );
      });
}
