import { Request, Response, Router } from "express";
import * as userService from "../../service/user";
import * as userActivityAreaService from "../../service/activityArea";
import * as userTable from "../../database/users";
import * as userActivityAreaTable from "../../database/userActivityArea";
import * as areaTable from "../../database/area";
import {
  getGetUserProfileResponseWrapper,
  getPutUserProfileRequestWrapper
} from "../../gateway/user";
import * as admin from "firebase-admin";
import { authenticate } from "../../middleware/authentication";
import { getRequestType, RequestType } from "../../gateway/requestDataType";
import { GetUserProfileResponse } from "../../proto/userService_pb";
import { ApiException, invalidParameterError } from "../../error/apiException";
import { ResponseWrapper } from "../../gateway/responseWrapper";
import { EmptyResponse } from "../../proto/empty_pb";
import { Area } from "../../proto/area_pb";

function getUserIdFromRequest(request: Request): Promise<string> {
  return new Promise<string>((onResolve, onReject) => {
    const userId = request.params["id"];
    if (userId) {
      onResolve(userId);
    } else {
      onReject(invalidParameterError("user ID is required"));
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
    .then(results => {
      const getUserProfileResponse = new GetUserProfileResponse();
      getUserProfileResponse.setUser(results[0]);
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

export function provideUserProfileRouter(auth: admin.auth.Auth): Router {
  const router = Router();
  router.get("/:id", (request, response) => getUsrProfile(request, response));
  router.put("/:id", authenticate(auth), (request, response) => {
    console.log("put : passed authentication");
    // updateUserProfile(request, response);
  });
  router.delete("/:id", authenticate(auth), (request, response) => {
    const userId = request.params["id"];
  });
  return router;
}
