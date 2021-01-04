import { Request, Response, Router } from "express";
import * as userRequestUtil from "../util";
import * as userCityService from "../../../service/userCity";
import * as userCitiesTable from "../../../database/user/cities";
import * as areaTable from "../../../database/areas";
import { ResponseHandler } from "../../../response/handler";

import deserialize, {} from "../../../request/deserialize"
import { pj } from "johnny-proto";
import proto = pj.sakuchin.percussion.proto;

const updateUserCities = (
  userId: string,
  areas: Array<proto.ICity>
): Promise<number> =>
  userCityService.updateUserCities(
    userId,
    areas,
    userCitiesTable.deleteCities,
    userCitiesTable.insertCities
  );

const getUserCitiesByUserId = (userId: string): Promise<Array<proto.ICity>> =>
  userCityService.getUserCitiesByUserId(
    userId,
    userCitiesTable.selectCities,
    areaTable.selectCitiesByIds
  );

const getUserCities = (request: Request, response: Response): void => {
  const responseHandler = new ResponseHandler<proto.GetUserCityResponse>(
    request, 
    response, 
    proto.GetUserCityResponse.encode,
    proto.GetUserCityResponse.toObject,
  )
  userRequestUtil
    .getUserIdFromRequest(request)
    .then(getUserCitiesByUserId)
    .then((cities: Array<proto.ICity>) => {
      return new proto.GetUserCityResponse({
        cities: cities,
      });
    })
    .then(responseHandler.respondSuccess);
};

const putUserCities = (request: Request, response: Response): void => {
  const cities = deserialize(
    request, 
    proto.PutUserCityRequest.decode, 
    proto.PutUserCityRequest.fromObject
  ).cities;
  userRequestUtil
    .getUserIdFromRequest(request)
    .then((userId: string) => updateUserCities(userId, cities))
    .then((citiesNum: number) => response.send(citiesNum));
};

export function provideUserCityRouter(
  authenticate: (Request, Response, NextFunction) => void,
): Router {
  const router = Router();
  router.get("/:id/profile/city", authenticate, getUserCities);
  router.put("/:id/profile/city", authenticate, putUserCities);
  return router;
}
