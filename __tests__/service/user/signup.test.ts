import * as signupService from "../../../src/service/signup";
import {
  SignupUserRequest,
  SignupUserResponse
} from "../../../src/proto/userService_pb";
import { PercussionApiError } from "../../../src/proto/error_pb";
import { ApiException } from "../../../src/error/apiException";
import { User } from "../../../src/proto/user_pb";
import { FirebaseUser } from "../../../src/firebase/getUser";

describe("signup", function() {
  describe("when no token is set in the request", () => {
    const request = new SignupUserRequest();
    request.setToken("");

    it("should return NO_TOKEN as error", () => {
      const expectedError = new ApiException(
        PercussionApiError.ErrorCode.NO_TOKEN,
        "Valid firebase token is necessary at sign-in",
        401
      );
      expect(
        signupService.signup(request, jest.fn(), jest.fn())
      ).rejects.toThrow(expectedError);
    });
  });

  describe("when everything is fine", () => {
    // Token is set correctly.
    const dummyToken = "dummyToken";
    const request = new SignupUserRequest();
    request.setToken(dummyToken);

    // getFirebaseUser returns user.
    const expectedUser = new User();
    expectedUser.setId("dummyId");
    expectedUser.setName("dummyName");
    expectedUser.setPhoto("dummyPhoto");
    const expectedEmail = "email@mail.com";
    const expectedFirebaseUser = new FirebaseUser(expectedUser, expectedEmail);
    const mockedGetFirebaseUser = jest.fn();
    mockedGetFirebaseUser.mockReturnValueOnce(
      new Promise<FirebaseUser>(onResolve => onResolve(expectedFirebaseUser))
    );

    // registerUserToDatabase is success
    const expectedResponse = new SignupUserResponse();
    expectedResponse.setUser(expectedUser);
    const mockedRegisterUserToDb = jest.fn();
    mockedRegisterUserToDb.mockReturnValueOnce(
      new Promise<User>(onResolve => onResolve(expectedUser))
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
