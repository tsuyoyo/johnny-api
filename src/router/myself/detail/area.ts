import { request, Request, Response, Router } from "express";
import { getUserId } from "../../../request/header";
import { FirebaseUser } from "../../../firebase/verify";
import * as userCityService from "../../../service/userCity";
import * as userCitiesTable from "../../../database/user/cities";
import * as areaTable from "../../../database/areas";
import { pj } from "johnny-proto";
import proto = pj.sakuchin.percussion.proto;
import { ResponseHandler } from "../../../response/handler";

const buildMyselfDetailAreaResponse = (cities: Array<proto.ICity>) =>
    new proto.GetMyselfDetailAreaResponse({ cities: cities })

function getAreas(request: Request, response: Response) {
    const responseHandler = new ResponseHandler<proto.GetMyselfDetailAreaResponse>(
        request, 
        response, 
        proto.GetMyselfDetailAreaResponse.encode
    );
    userCityService
        .getUserCitiesByUserId(
            getUserId(request),
            userCitiesTable.selectCities,
            areaTable.selectCitiesByIds
        )
        .then((cities: Array<proto.ICity>) => buildMyselfDetailAreaResponse(cities))
        .then((res: proto.GetMyselfDetailAreaResponse) => responseHandler.respondSuccess(res));
};

function addArea(request: Request, response: Response) {
    const userId = getUserId(request);
}

function deleteArea(request: Request, response: Response) {
    const userId = getUserId(request);
}

function updateArea(request: Request, response: Response) {
    const userId = getUserId(request);
}

export function provideRouter(): Router {
    const router = Router();
    router.get("/", getAreas);
    router.post("/", addArea);
    router.delete("/", deleteArea);
    router.put("/", updateArea);
    return router;
}