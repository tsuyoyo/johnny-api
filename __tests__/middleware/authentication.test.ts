import { authenticate } from "../../src/middleware/authentication";
import { ApiException } from "../../src/error/apiException";
import { pj } from "johnny-proto";
import proto = pj.sakuchin.percussion.proto;
import { mocked } from "ts-jest/utils";
import { respondError } from "../../src/error/responsdError";
import { FirebaseUser } from "../../src/firebase/verify";
import * as headerLogic from "../../src/request/header";

jest.mock("../../src/error/responsdError");

describe("authenticate", function () {
  const request = jest.fn();
  const response = jest.fn();
  const next = jest.fn();

  beforeEach(function () {
    mocked(respondError).mockClear();
  });

  describe("header does not have enough info", function () {
    const expectedError = new ApiException(
      proto.PercussionApiError.ErrorCode.LOGIN_REQUIRED,
      "Loginしてください",
      401
    );
    describe("when token is empty", function () {
      beforeEach(function () {
        jest.spyOn(headerLogic, "getUserId").mockReturnValueOnce("user");
        jest.spyOn(headerLogic, "getToken").mockReturnValueOnce("");
        authenticate(jest.fn())(request, response, next);
      });
      it("should call responsdError with LOGIN_REQUIRED", function () {
        expect(respondError).toBeCalledWith(response, expectedError);
      });
    });

    describe("when userId is empty", function () {
      beforeEach(function () {
        jest.spyOn(headerLogic, "getUserId").mockReturnValueOnce("");
        jest.spyOn(headerLogic, "getToken").mockReturnValueOnce("token");
        authenticate(jest.fn())(request, response, next);
      });
      it("should call responsdError with LOGIN_REQUIRED", function () {
        expect(respondError).toBeCalledWith(response, expectedError);
      });
    });
  });

  describe("when token is verified", function () {
    const player = new proto.Player({
      id: "userId",
      name: "name",
    });

    describe("when user ID is found", function () {
      const mockedVerifyToken = jest
        .fn()
        .mockImplementation((token: string) => {
          return new Promise<FirebaseUser>((onResolve) => {
            onResolve(new FirebaseUser(player, "mail@mail.com"));
          });
        });
      beforeEach(function () {
        jest.spyOn(headerLogic, "getUserId").mockReturnValueOnce(player.id);
        jest.spyOn(headerLogic, "getToken").mockReturnValueOnce("ttttttoken");
        authenticate(mockedVerifyToken)(request, response, next);
      });
      it("should call next", function () {
        expect(next).toBeCalledTimes(1);
      });
    });

    describe("when user ID is NOT found", function () {
      const mockedVerifyToken = jest
        .fn()
        .mockImplementation((token: string) => {
          return new Promise<FirebaseUser>((onResolve) => {
            const differentUser = new proto.User({
              id: "differentUser",
              name: "aaaaa",
            });
            onResolve(new FirebaseUser(differentUser, "mail@mail.com"));
          });
        });
      const expectedError = new ApiException(
        proto.PercussionApiError.ErrorCode.AUTHENTICATION_ERROR,
        "再認証してください",
        401
      );

      beforeEach(function () {
        jest.spyOn(headerLogic, "getUserId").mockReturnValueOnce("user");
        jest.spyOn(headerLogic, "getToken").mockReturnValueOnce("ttttttoken");
        authenticate(mockedVerifyToken)(request, response, next);
      });
      it("should call respondError", function () {
        expect(respondError).toBeCalledWith(response, expectedError);
      });
      it("should NOT call next", function () {
        expect(next).not.toBeCalled;
      });
    });
  });

  describe("when token is NOT verified", function () {
    const mockedVerifyToken = jest.fn().mockImplementation((token: string) => {
      return new Promise<FirebaseUser>((onResolve, onReject) => {
        onReject();
      });
    });

    beforeEach(function () {
      jest.spyOn(headerLogic, "getUserId").mockReturnValueOnce("user");
      jest.spyOn(headerLogic, "getToken").mockReturnValueOnce("token");
      authenticate(mockedVerifyToken)(request, response, next);
    });
    it("should call respondError", function () {
      const expectedError = new ApiException(
        proto.PercussionApiError.ErrorCode.AUTHENTICATION_ERROR,
        "再認証してください",
        401
      );
      expect(respondError).toBeCalledWith(response, expectedError);
    });
    it("should NOT call next", function () {
      expect(next).not.toBeCalled;
    });
  });
});
