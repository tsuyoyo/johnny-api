import { auth } from "firebase-admin";
import { ApiException } from "../../src/error/apiException";
import { FirebaseUser, verifyToken } from "../../src/firebase/verify";
import { pj } from "johnny-proto";
import proto = pj.sakuchin.percussion.proto;

describe("verifyToken", () => {
  describe("when verifyIdToken throwns error", () => {
    const expectedError = { message: "aaaaa" };
    const mockedVerifyIdToken = jest
      .fn()
      .mockImplementation(() => Promise.reject(expectedError));

    it("should NOT call next", function () {
      const expectedError = new ApiException(
        proto.PercussionApiError.ErrorCode.INVALID_FIREBASE_TOKEN,
        `Invalid firebase token - aaaaa`,
        403
      );
      return expect(
        verifyToken(mockedVerifyIdToken, jest.fn())("token")
      ).rejects.toThrow(expectedError);
    });
  });

  describe("when verifyIdToken success", () => {
    const mockedDecodedIdToken = ({
      uuid: "dummyUuid",
    } as unknown) as auth.DecodedIdToken;

    const mockedVerifyIdToken = jest
      .fn()
      .mockImplementation(() => Promise.resolve(mockedDecodedIdToken));

    describe("when getUser throws exception", () => {
      const mockedGetUser = jest.fn().mockImplementation(
        (uuid: string) =>
          new Promise<auth.UserRecord>((_onResolve, onReject) => {
            onReject({ message: "aaaaa" });
          })
      );

      const expectedError = new ApiException(
        proto.PercussionApiError.ErrorCode.INVALID_FIREBASE_TOKEN,
        `Invalid firebase token - aaaaa`,
        403
      );

      it("should NOT call next", function () {
        return expect(
          verifyToken(mockedVerifyIdToken, mockedGetUser)("token")
        ).rejects.toThrow(expectedError);
      });
    });

    describe("when getUser return UserRecord", () => {
      const expectedUserRecord = ({
        uid: "uid",
        displayName: "name",
        photoURL: "photoUrl",
        email: "mail@mail.com",
      } as unknown) as auth.UserRecord;

      const mockedGetUser = jest.fn().mockImplementation(
        (_uuid: string) =>
          new Promise<auth.UserRecord>((onResolve) => {
            onResolve(expectedUserRecord);
          })
      );

      const expectedFirebaseUser = new FirebaseUser(
        new proto.Player({
          id: expectedUserRecord.uid,
          name: expectedUserRecord.displayName,
          icon: expectedUserRecord.photoURL,
        }),
        expectedUserRecord.email
      );

      it("should return FirebaseUser", function () {
        return expect(
          verifyToken(mockedVerifyIdToken, mockedGetUser)("token")
        ).resolves.toMatchObject(expectedFirebaseUser);
      });
    });
  });
});
