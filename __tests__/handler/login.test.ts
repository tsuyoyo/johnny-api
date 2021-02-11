import * as playerRespository from "../../src/repository/player";
import { pj } from "johnny-proto";
import proto = pj.sakuchin.percussion.proto;
import { FirebaseUser } from "../../src/firebase/verify";
import * as target from "../../src/handler/login";
import { ApiException } from "../../src/error/apiException";

describe("login", () => {
  const request = new proto.PostLoginRequest({});

  describe("when verifyToken returns FirebaseUser", () => {
      const firebaseUser = new FirebaseUser(new proto.User({}), "mail");
      const mockedVerifyToken = (token: string) => new Promise<FirebaseUser>((onResolve, onReject) => {
        onResolve(firebaseUser);
      });
      let spyGetPlayer;
      let result;

      describe("when playerRepository returns Player instance", () => {
        const player = new proto.Player({ id: "id", name: "aaa", icon: "icon" });
        const expectedResponse = new proto.PostLoginResponse({ player })

        beforeEach(() => {
          spyGetPlayer = jest.spyOn(playerRespository, 'getPlayer').mockImplementation(
            (id: string) => new Promise<proto.IPlayer>((onResolve) => {onResolve(player)})
          );
          result = expect(target.login(request, mockedVerifyToken)).resolves;
        })
        it("should return PostLoginResponse with the player", () => {
          result.toMatchObject(expectedResponse);
        });
        afterEach(() => {
          jest.clearAllMocks();
        })
      })

      describe("when playerRepository throws error", () => {
        const responsitoryException = new ApiException(proto.PercussionApiError.ErrorCode.DB_ERROR, "aaa", 400);

        beforeEach(() => {
          spyGetPlayer = jest.spyOn(playerRespository, 'getPlayer').mockImplementation(
            (id: string) => new Promise<proto.IPlayer>((onResolve, onReject) => {onReject(responsitoryException)})
          );
          result = expect(target.login(request, mockedVerifyToken)).rejects;
        })
        it("should throw ApiException with ErrorCode.AUTHENTICATION_ERROR", () => {
          result.toMatchObject({
            apiError: proto.PercussionApiError.ErrorCode.AUTHENTICATION_ERROR,
            statusCode: 404,
          })
        })
        afterEach(() => {
          jest.clearAllMocks();
        })
      })
    })

    describe("when verifyToken throws error", () => {
      const mockedVerifyToken = (token: string) => new Promise<FirebaseUser>((onResolve, onReject) => {
        onReject({message : "dummyError"});
      });
      let result;
      beforeEach(() => {
        result = expect(target.login(request, mockedVerifyToken)).rejects;
      })
      it("should throw ApiException with ErrorCode.AUTHENTICATION_ERROR", () => {
        result.toMatchObject({
          apiError: proto.PercussionApiError.ErrorCode.AUTHENTICATION_ERROR,
          statusCode: 404,
        })
      })
      afterEach(() => {
        jest.clearAllMocks();
      })
    })
})