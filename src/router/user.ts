import { Request, Response, Router } from "express";
import * as signupService from "../service/signup";
import * as userService from "../service/user";
import * as userActivityAreaService from "../service/activityArea";
import * as userTable from "../database/users";
import * as userActivityAreaTable from "../database/userActivityArea";
import * as areaTable from "../database/area";
import {
  getSignupUserReqeustWrapper,
  getSignupUserResponseWrapper,
  getGetUserProfileResponseWrapper,
  getPutUserProfileRequestWrapper
} from "../gateway/user";
import * as admin from "firebase-admin";
import { getRequestType, RequestType } from "../gateway/requestDataType";
import { getFirebaseUser } from "../firebase/getUser";
import {
  SignupUserResponse,
  GetUserProfileResponse
} from "../proto/userService_pb";
import { ApiException } from "../error/apiException";
import { ResponseWrapper } from "../gateway/responseWrapper";
import { EmptyResponse } from "../proto/empty_pb";
import { PercussionApiError } from "../proto/error_pb";
import { Area } from "../proto/area_pb";

function signup(
  request: Request,
  response: Response,
  defaultAuth: admin.auth.Auth
): void {
  const reqType: RequestType = getRequestType(request.headers["content-type"]);
  const responseWrapper = getSignupUserResponseWrapper(response, reqType);
  const requestWrapper = getSignupUserReqeustWrapper(request, reqType);
  signupService
    .signup(
      requestWrapper.deserializeData(),
      getFirebaseUser(defaultAuth),
      userTable.insertUser
    )
    .then((res: SignupUserResponse) => responseWrapper.respondSuccess(res))
    .catch((error: ApiException) => responseWrapper.respondError(error));
}

function getUserIdFromRequest(request: Request): Promise<string> {
  return new Promise<string>((onResolve, onReject) => {
    const userId = request.params["id"];
    if (userId) {
      onResolve(userId);
    } else {
      const idNotFoundError = new ApiException(
        PercussionApiError.ErrorCode.INVALID_PARAMETER,
        "userId is required",
        403
      );
      onReject(idNotFoundError);
    }
  });
}

function getUsrProfile(request: Request, response: Response): void {
  const reqType: RequestType = getRequestType(request.headers["content-type"]);
  const responseWrapper = getGetUserProfileResponseWrapper(response, reqType);
  const getActivityArea = (userId: string): Promise<Array<Area>> =>
    userActivityAreaService.getActivityArea(
      userId,
      userActivityAreaTable.selectActiveAreaIds,
      areaTable.selectAreasByIds
    );

  getUserIdFromRequest(request)
    .then((userId: string) => {
      const promises = [];
      promises.push(userTable.selectUserById(userId));
      promises.push(userService.getUserProfile(userId, getActivityArea));
      return Promise.all(promises);
    })
    .then((results: any[]) => {
      const getUserProfileResponse = new GetUserProfileResponse();
      getUserProfileResponse.setUserprofile(results[0]);
      getUserProfileResponse.setUserprofile(results[1]);
      responseWrapper.respondSuccess(getUserProfileResponse);
    })
    .catch((apiError: ApiException) => responseWrapper.respondError(apiError));
}

function updateUserProfile(request: Request, response: Response): void {
  const reqType: RequestType = getRequestType(request.headers["content-type"]);
  const requestWrapper = getPutUserProfileRequestWrapper(request, reqType);
  const responseWrapper = new ResponseWrapper<EmptyResponse>(response, reqType);
  const putUserProfileRequest = requestWrapper.deserializeData();
  const updateActivityArea = (
    userId: string,
    areas: Array<Area>
  ): Promise<number> =>
    userActivityAreaService.updateActivityArea(
      userId,
      areas,
      userActivityAreaTable.deleteActiveAreas,
      userActivityAreaTable.insertActivityAreas
    );

  userService
    .updateUserProfile(
      putUserProfileRequest.getUser(),
      putUserProfileRequest.getUserprofile(),
      updateActivityArea
    )
    .then(() => responseWrapper.respondSuccess(new EmptyResponse()))
    .catch((error: ApiException) => responseWrapper.respondError(error));
}

export function provideUserRouter(defaultAuth: admin.auth.Auth): Router {
  const router = Router();
  router.post("/signup", (request, response) =>
    signup(request, response, defaultAuth)
  );
  router.get("/profile/:id", (request, response) =>
    getUsrProfile(request, response)
  );
  // TODO : authentication before update
  router.put("/profile", (request, response) =>
    updateUserProfile(request, response)
  );
  // TODO : authentication before delete
  router.delete("/profile/:id", (request, response) => {
    const userId = request.params["id"];
  });
  return router;
}
