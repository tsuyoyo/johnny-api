import authenticate from "../../../middleware/authentication";
import * as admin from "firebase-admin";
import { Request, Response, Router } from "express";
import * as userRequestUtil from "../util";
import {
  PutUserCityRequest,
  GetUserCityResponse,
} from "../../../proto/userService_pb";
import { RequestWrapper } from "../../../gateway/requestWrapper";
import * as userCityService from "../../../service/userCity";
import * as userCitiesTable from "../../../database/user/cities";
import * as areaTable from "../../../database/areas";
import { City } from "../../../proto/area_pb";
import { ResponseWrapper } from "../../../gateway/responseWrapper";

const updateUserCities = (
  userId: string,
  areas: Array<City>
): Promise<number> =>
  userCityService.updateUserCities(
    userId,
    areas,
    userCitiesTable.deleteCities,
    userCitiesTable.insertCities
  );

const getUserCitiesByUserId = (userId: string): Promise<Array<City>> =>
  userCityService.getUserCitiesByUserId(
    userId,
    userCitiesTable.selectCities,
    areaTable.selectCitiesByIds
  );

const getUserCities = (request: Request, response: Response): void => {
  const responseWrapper = new ResponseWrapper<GetUserCityResponse>(response);
  userRequestUtil
    .getUserIdFromRequest(request)
    .then(getUserCitiesByUserId)
    .then((cities: Array<City>) => {
      const res = new GetUserCityResponse();
      res.setCitiesList(cities);
      return res;
    })
    .then(responseWrapper.respondSuccess);
};

const putUserCities = (request: Request, response: Response): void => {
  const requestWrapper = new RequestWrapper<PutUserCityRequest>(
    request,
    PutUserCityRequest.deserializeBinary
  );
  const cities = requestWrapper.deserializeData().getCitiesList();
  userRequestUtil
    .getUserIdFromRequest(request)
    .then((userId: string) => updateUserCities(userId, cities))
    .then((citiesNum: number) => response.send(citiesNum));
};

export function provideUserCityRouter(auth: admin.auth.Auth): Router {
  const router = Router();
  router.get("/:id/profile/city", authenticate(auth), getUserCities);
  router.put("/:id/profile/city", authenticate(auth), putUserCities);
  return router;
}
