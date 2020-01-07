import { ResponseWrapper } from "./responseWrapper";
import { RequestWrapper } from "./requestWrapper";
import { SignupUserRequest, SignupUserResponse } from "../proto/userService_pb";
import { RequestType } from "./requestDataType";
import { Request, Response } from "express";

function convertObjectToSingupUserRequest(obj: object): SignupUserRequest {
  const response = new SignupUserRequest();
  response.setToken(obj["token"]);
  return response;
}

export function getSignupUserReqeustWrapper(
  request: Request,
  requestType: RequestType
): RequestWrapper<SignupUserRequest> {
  return new RequestWrapper<SignupUserRequest>(
    request,
    requestType,
    SignupUserRequest.deserializeBinary,
    convertObjectToSingupUserRequest
  );
}

export function getSignupUserResponseWrapper(
  response: Response,
  requestType: RequestType
): ResponseWrapper<SignupUserResponse> {
  return new ResponseWrapper<SignupUserResponse>(response, requestType);
}
