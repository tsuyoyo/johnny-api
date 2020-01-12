import { ResponseWrapper } from "./responseWrapper";
import { RequestWrapper } from "./requestWrapper";
import {
  SignupUserRequest,
  SignupUserResponse,
  GetUserProfileResponse,
  PutUserProfileRequest
} from "../proto/userService_pb";
import { RequestType } from "./requestDataType";
import { Request, Response } from "express";
import { UserProfile, User } from "../proto/user_pb";
import { Area } from "../proto/area_pb";

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

export function getGetUserProfileResponseWrapper(
  response: Response,
  requestType: RequestType
): ResponseWrapper<GetUserProfileResponse> {
  return new ResponseWrapper<GetUserProfileResponse>(response, requestType);
}

function convertObjectToUser(obj: object): User {
  const user = new User();
  user.setId(obj["id"]);
  user.setName(obj["name"]);
  user.setPhoto(obj["photo"]);
  return user;
}

function convertObjectToArea(obj: object): Area {
  const area = new Area();
  area.setId(obj["id"]);
  area.setName(obj["name"]);
  area.setPrefecture(obj["prefecture"]);
  return area;
}

function convertObjectToUserProfile(obj: object[]): UserProfile {
  const userProfile = new UserProfile();
  const activityAreas = new Array<Area>();
  for (const areaObj of obj) {
    activityAreas.push(convertObjectToArea(areaObj));
  }
  userProfile.setActivityareasList(activityAreas);
  return userProfile;
}

function convertObjectToPutUserProfileRequest(
  obj: object
): PutUserProfileRequest {
  const response = new PutUserProfileRequest();
  response.setUser(convertObjectToUser(obj["user"]));
  response.setUserprofile(convertObjectToUserProfile(obj["userProfile"]));
  return response;
}

export function getPutUserProfileRequestWrapper(
  request: Request,
  requestType: RequestType
): RequestWrapper<PutUserProfileRequest> {
  return new RequestWrapper<PutUserProfileRequest>(
    request,
    requestType,
    PutUserProfileRequest.deserializeBinary,
    convertObjectToPutUserProfileRequest
  );
}