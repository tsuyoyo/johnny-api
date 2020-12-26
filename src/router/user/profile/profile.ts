import { Request, Response, Router } from "express";
import * as userService from "../../../service/user";
import * as userCityService from "../../../service/userCity";
import * as userTable from "../../../database/users";
import * as userCitiesTable from "../../../database/user/cities";
import * as areaTable from "../../../database/areas";
import * as admin from "firebase-admin";
import authenticate from "../../../middleware/authentication";
import { ApiException } from "../../../error/apiException";
import { ResponseHandler } from "../../../response/handler"
import * as userRequestUtil from "../util";
import deserializeRequest from "../../../request/deserialize";
import { pj } from "../../../proto/compiled";
import proto = pj.sakuchin.percussion.proto

const getActivityArea = (userId: string): Promise<Array<proto.ICity>> =>
  userCityService.getUserCitiesByUserId(
    userId,
    userCitiesTable.selectCities,
    areaTable.selectCitiesByIds
  );

const buildGetUserProfileResponse = (
  user: proto.IUser,
  userProfile: proto.IUserProfile
): proto.GetUserProfileResponse => {
  return new proto.GetUserProfileResponse({
    user: user,
    userProfile: userProfile,
  });
};

function getUserProfile(request: Request, response: Response): void {
  const responseWrapper = new ResponseHandler<proto.GetUserProfileResponse>(
    request, response, proto.GetUserProfileResponse.encode
  );
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
  areas: Array<proto.ICity>
): Promise<number> =>
  userCityService.updateUserCities(
    userId,
    areas,
    userCitiesTable.deleteCities,
    userCitiesTable.insertCities
  );

function updateUserProfile(request: Request, response: Response): void {
  const responseWrapper = new ResponseHandler<proto.EmptyResponse>(
    request, response, proto.EmptyResponse.encode
  );
  const putUserProfileRequest = deserializeRequest(
    request, 
    proto.PutUserProfileRequest.decode, 
    proto.PutUserProfileRequest.fromObject,
  );

  userService
    .updateUserProfile(
      putUserProfileRequest.user,
      putUserProfileRequest.userProfile,
      updateUserActivityArea
    )
    .then(() => responseWrapper.respondSuccess(new proto.EmptyResponse()))
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
