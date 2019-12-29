import { auth } from "firebase-admin";
import * as signupService from "../../../src/service/user/signup";
import { RequestWrapper } from "../../../src/gateway/requestWrapper";
import {
  SignupUserRequest,
  SignupUserResponse
} from "../../../src/proto/userService_pb";
import { ResponseWrapper } from "../../../src/gateway/responseWrapper";
import { PercussionApiError } from "../../../src/proto/error_pb";
import { mocked } from "ts-jest/utils";
import { createMock } from "ts-auto-mock";

jest.mock("../../../src/gateway/requestWrapper");

describe("signup", function() {
  it("should send api error with NO_TOKEN error code", function() {
    const target = mocked(RequestWrapper).mockImplementation((): any => {
      return {
        deserializeData: (): SignupUserRequest => {
          const dummyRequest = new SignupUserRequest();
          dummyRequest.setToken(null);
          return dummyRequest;
        }
      };
    });

    expect(target)

    // mockedRequest.deserializeData = (): SignupUserRequest => dummyRequest;

    // signupService.signup(mockedAuth, mockedRequest, mockedResponse);

    // expect(mockedResponse.makeApiErrorAndRespond).toBeCalledWith(
    //   PercussionApiError.ErrorCode.NO_TOKEN,
    //   "Valid firebase token is necessary at sign-in",
    //   401
    // );
  });
});
