import { Router, Request, Response } from "express";
import * as areaTable from "../database/area";
import { addArea } from "../service/area";
import { getRequestType, RequestType } from "../gateway/requestDataType";
import {
  getAddAreaRequestWrapper,
  getAddAreaResponseWrapper,
  getGetAreaResponseWrapper
} from "../gateway/area";
import { Area } from "../proto/area_pb";
import { AddAreaResponse, GetAreaResponse } from "../proto/areaService_pb";
import { ApiException } from "../error/apiException";

function getArea(request: Request, response: Response): void {
  const reqType: RequestType = getRequestType(request.headers["content-type"]);
  const responseWrapper = getGetAreaResponseWrapper(response, reqType);
  areaTable
    .getAreasByPrefecture(request.query.prefecture)
    .then((areas: Array<Area>) => {
      const getGetAreaResponse = new GetAreaResponse();
      getGetAreaResponse.setAreasList(areas);
      responseWrapper.respondSuccess(getGetAreaResponse);
    })
    .catch((error: ApiException) => responseWrapper.respondError(error));
}

function postArea(request: Request, response: Response): void {
  const reqType: RequestType = getRequestType(request.headers["content-type"]);
  const responseWrapper = getAddAreaResponseWrapper(response, reqType);
  const requestWrapper = getAddAreaRequestWrapper(request, reqType);
  addArea(requestWrapper.deserializeData(), areaTable.addArea)
    .then((res: AddAreaResponse) => responseWrapper.respondSuccess(res))
    .catch((error: ApiException) => responseWrapper.respondError(error));
}

export function provideAreaRouter(): Router {
  const router = Router();
  router.get("/", (request, response) => getArea(request, response));
  router.post("/", (request, response) => postArea(request, response));
  return router;
}