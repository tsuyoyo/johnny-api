import { Request, Response, Router } from "express";
import * as userService from "../../../service/user";
import * as userCityService from "../../../service/userCity";
import * as userTable from "../../../database/users";
import * as userCitiesTable from "../../../database/user/cities";
import * as areaTable from "../../../database/areas";
import * as admin from "firebase-admin";
import authenticate from "../../../middleware/authentication";
import {
  GetUserProfileResponse,
  PutUserProfileRequest,
} from "../../../proto/userService_pb";
import { ApiException } from "../../../error/apiException";
import { ResponseWrapper } from "../../../gateway/responseWrapper";
import { EmptyResponse } from "../../../proto/empty_pb";
import { City } from "../../../proto/area_pb";
import { User, UserProfile } from "../../../proto/user_pb";
import { RequestWrapper } from "../../../gateway/requestWrapper";
import * as userRequestUtil from "../util";

const getActivityArea = (userId: string): Promise<Array<City>> =>
  userCityService.getUserCitiesByUserId(
    userId,
    userCitiesTable.selectCities,
    areaTable.selectCitiesByIds
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
  const responseWrapper = new ResponseWrapper<GetUserProfileResponse>(response);
  userRequestUtil
    .getUserIdFromRequest(request)
    .then((userId: string) =>
      Promise.all([
        userTable.selectUserById(userId),
        userService.getUserProfile(userId, getActivityArea),
      ])
    )
    .then((results) => {
      const [user, userProfile] = results;
      responseWrapper.respondSuccess(
        buildGetUserProfileResponse(user, userProfile)
      );
    })
    .catch(responseWrapper.respondError);
}

const updateUserActivityArea = (
  userId: string,
  areas: Array<City>
): Promise<number> =>
  userCityService.updateUserCities(
    userId,
    areas,
    userCitiesTable.deleteCities,
    userCitiesTable.insertCities
  );

function updateUserProfile(request: Request, response: Response): void {
  const requestWrapper = new RequestWrapper<PutUserProfileRequest>(
    request,
    PutUserProfileRequest.deserializeBinary
  );
  const responseWrapper = new ResponseWrapper<EmptyResponse>(response);
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
  router.get("/:id/profile", (request, response) =>
    getUserProfile(request, response)
  );
  router.put("/:id/profile", authenticate(auth), (_request, response) => {
    console.log("put : passed authentication");
    // updateUserProfile(request, response);
  });
  router.delete("/:id/profile", authenticate(auth), (request, response) => {
    const userId = request.params["id"];
  });

  return router;
}
