import * as target from "../../src/handler/signup";
import { pj } from "johnny-proto";
import proto = pj.sakuchin.percussion.proto;
import { ApiException } from "../../src/error/apiException";
import { FirebaseUser } from "../../src/firebase/verify";
import * as playerRepository from "../../src/repository/player";

describe("signup", function () {

  describe("when no token is set in the request", () => {
    const request = new proto.SignupUserRequest({
      token: "",
    });
    it("should return NO_TOKEN as error", () => {
      return expect(target.signup(request, jest.fn()))
        .rejects
        .toMatchObject({
          apiError: proto.PercussionApiError.ErrorCode.NO_TOKEN,
          statusCode: 401,
        });
    });
  });

  describe("when token is set", () => {
    const dummyToken = "dummyToken";
    const request = new proto.SignupUserRequest({
      token: dummyToken,
    });
    describe("when verifyFirebaseToken returns FirebaseUser", () => {
      const expectedUser = new proto.Player({
        id: "dummyId",
        name: "dummyName",
        icon: "dummyPhoto",
      });
      const expectedEmail = "email@mail.com";
      const expectedFirebaseUser = new FirebaseUser(expectedUser, expectedEmail);  
      const verifyFirebaseToken = (token: string) =>
        new Promise<FirebaseUser>((onResolve) => onResolve(expectedFirebaseUser));

      describe("when playerRepository succeeds adding player", () => {
        const expectedResponse = new proto.PostSignupResponse(
          { player: expectedUser }
        );
        beforeEach(() => {
          jest.spyOn(playerRepository, "addPlayer")
            .mockImplementation((_player: proto.IPlayer, _email: string) => 
              new Promise<proto.IPlayer>((onResolve) => onResolve(expectedUser))
            )
        })
        it("should return response object", () => {
          return expect(target.signup(request, verifyFirebaseToken))
            .resolves
            .toMatchObject(expectedResponse);
        })
        afterEach(() => {
          jest.clearAllMocks();
        })
      });
      describe("when playerRepository fails adding player", () => {
        const expectedError = { message: "dummyError" }
        beforeEach(() => {
          jest.spyOn(playerRepository, "addPlayer")
            .mockImplementation((_player: proto.IPlayer, _email: string) => 
              new Promise<proto.IPlayer>((_onResolve, onReject) => onReject(expectedError))
            )
        })
        test("should return error returned from responsitory", () => {
          return expect(target.signup(request, verifyFirebaseToken))
            .rejects
            .toMatchObject(expectedError);
        })
        afterEach(() => {
          jest.clearAllMocks();
        })        
      });
    });

    describe("when verifyFirebaseToken throws exception", () => {
      const expectedError = { message: "dummyError" }
      const verifyFirebaseToken = (token: string) =>
        new Promise<FirebaseUser>((_onResolve, onReject) => onReject(expectedError));

      it("should return error returned from responsitory", () => {
        return expect(target.signup(request, verifyFirebaseToken))
          .rejects
          .toMatchObject(expectedError);
      })
    });
  });
});
