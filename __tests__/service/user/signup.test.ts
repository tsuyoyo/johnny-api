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

// TODO : https://qiita.com/rema424/items/ee650a1cf99de178cb90 をまねてみよう
jest.mock("../../../src/gateway/requestWrapper");

describe("signup", function() {
  it("should work", function() {
    const value = 15;
    const mockedOnSuccess = jest.fn();
    const mockedOnError = jest.fn();

    signupService.sample(true, value, mockedOnSuccess, mockedOnError);

    expect(mockedOnSuccess).toHaveBeenCalledWith(value * 2);
    expect(mockedOnSuccess).toHaveBeenCalledTimes(1);
    expect(mockedOnError).toHaveBeenCalledTimes(0);
  });
});