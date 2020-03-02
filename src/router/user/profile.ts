import { Request, Response, Router } from "express";
import * as userService from "../../service/user";
import * as userActivityAreaService from "../../service/activityArea";
import * as userTable from "../../database/users";
import * as userActivityAreaTable from "../../database/userActivityArea";
import * as areaTable from "../../database/area";
import {
  getGetUserProfileResponseWrapper,
  getPutUserProfileRequestWrapper,
  getPutUserProfileActiveAreasRequestWrapper
} from "../../gateway/user";
import * as admin from "firebase-admin";
import authenticate from "../../middleware/authentication";
import { getRequestType, RequestType } from "../../gateway/requestDataType";
import { GetUserProfileResponse } from "../../proto/userService_pb";
import { ApiException, invalidParameterError } from "../../error/apiException";
import { ResponseWrapper } from "../../gateway/responseWrapper";
import { EmptyResponse } from "../../proto/empty_pb";
import { Area } from "../../proto/area_pb";
import { User, UserProfile } from "../../proto/user_pb";

const getUserIdFromRequest = (request: Request): Promise<string> =>
  new Promise<string>((onResolve, onReject) => {
    const userId = request.params["id"];
    if (userId) {
      onResolve(userId);
    } else {
      onReject(invalidParameterError("user ID is required"));
    }
  });

const getActivityArea = (userId: string): Promise<Array<Area>> =>
  userActivityAreaService.getActivityArea(
    userId,
    userActivityAreaTable.selectActiveAreaIds,
    areaTable.selectAreasByIds
  );

const buildGetUserProfileResponse = (
  user: User,
  userProfile: UserProfile
): GetUserProfileResponse => {
  const getUserProfileResponse = new GetUserProfileResponse();
  getUserProfileResponse.setUser(user);
  getUserProfileResponse.setUserprofile(userProfile);
  return getUserProfileResponse;
};

function getUserProfile(request: Request, response: Response): void {
  const responseWrapper = getGetUserProfileResponseWrapper(
    response,
    getRequestType(request)
  );
  getUserIdFromRequest(request)
    .then((userId: string) =>
      Promise.all([
        userTable.selectUserById(userId),
        userService.getUserProfile(userId, getActivityArea)
      ])
    )
    .then(results => {
      const [user, userProfile] = results;
      responseWrapper.respondSuccess(
        buildGetUserProfileResponse(user, userProfile)
      );
    })
    .catch(responseWrapper.respondError);
}

const updateUserActivityArea = (
  userId: string,
  areas: Array<Area>
): Promise<number> =>
  userActivityAreaService.updateActivityArea(
    userId,
    areas,
    userActivityAreaTable.deleteActiveAreas,
    userActivityAreaTable.insertActivityAreas
  );

const putActiveAreas = (request: Request, response: Response): void => {
  const requestWrapper = getPutUserProfileActiveAreasRequestWrapper(request);
  const putRequest = requestWrapper.deserializeData();
  getUserIdFromRequest(request).then((userId: string) =>
    updateUserActivityArea(userId, putRequest.getActivityareasList())
  );
};

function updateUserProfile(request: Request, response: Response): void {
  const reqType: RequestType = getRequestType(request);
  const requestWrapper = getPutUserProfileRequestWrapper(request, reqType);
  const responseWrapper = new ResponseWrapper<EmptyResponse>(response, reqType);
  const putUserProfileRequest = requestWrapper.deserializeData();

  userService
    .updateUserProfile(
      putUserProfileRequest.getUser(),
      putUserProfileRequest.getUserprofile(),
      updateUserActivityArea
    )
    .then(() => responseWrapper.respondSuccess(new EmptyResponse()))
    .catch((error: ApiException) => responseWrapper.respondError(error));
}

export function provideUserProfileRouter(auth: admin.auth.Auth): Router {
  const router = Router();
  // Profile
  router.get("/:id", (request, response) => getUserProfile(request, response));
  router.put("/:id", authenticate(auth), (request, response) => {
    console.log("put : passed authentication");
    // updateUserProfile(request, response);
  });
  router.delete("/:id", authenticate(auth), (request, response) => {
    const userId = request.params["id"];
  });

  // Active Areas
  router.get("/:id/activeAreas", authenticate(auth), (request, response) => {
    console.log("put : passed authentication");
  });
  router.put("/:id/activeAreas", authenticate(auth), putActiveAreas);

  return router;
}
