import * as signupService from "../../src/service/signup";
import { pj } from "../../src/proto/compiled";
import proto = pj.sakuchin.percussion.proto;
import { ApiException } from "../../src/error/apiException";
import { FirebaseUser } from "../../src/firebase/verify";

describe("signup", function () {
  describe("when no token is set in the request", () => {
    const request = new proto.SignupUserRequest({
      token: "",
    });

    it("should return NO_TOKEN as error", () => {
      const expectedError = new ApiException(
        proto.PercussionApiError.ErrorCode.NO_TOKEN,
        "Valid firebase token is necessary at sign-in",
        401
      );
      expect(signupService.signup(request, jest.fn(), jest.fn()))
        .rejects
        .toThrow(expectedError);
    });
  });

  describe("when everything is fine", () => {
    // Token is set correctly.
    const dummyToken = "dummyToken";
    const request = new proto.SignupUserRequest({
      token: dummyToken,
    });
    // getFirebaseUser returns user.
    const expectedUser = new proto.User({
      id: "dummyId",
      name: "dummyName",
      photo: "dummyPhoto",
    });
    const expectedEmail = "email@mail.com";
    const expectedFirebaseUser = new FirebaseUser(expectedUser, expectedEmail);
    const mockedGetFirebaseUser = jest.fn();
    mockedGetFirebaseUser.mockReturnValueOnce(
      new Promise<FirebaseUser>((onResolve) => onResolve(expectedFirebaseUser))
    );

    // registerUserToDatabase is success
    const expectedResponse = new proto.SignupUserResponse({
      user: expectedUser,
    });
    const mockedRegisterUserToDb = jest.fn();
    mockedRegisterUserToDb.mockReturnValueOnce(
      new Promise<proto.IUser>((onResolve) => onResolve(expectedUser))
    );

    it("should return SignupResponse instance with registered user info", async () => {
      await expect(
        signupService.signup(
          request,
          mockedGetFirebaseUser,
          mockedRegisterUserToDb
        )
      ).resolves.toEqual(expectedResponse);
    });
  });
});
