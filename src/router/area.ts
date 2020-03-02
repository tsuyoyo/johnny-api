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
import { ApiException, invalidParameterError } from "../error/apiException";
import authenticate from "../middleware/authentication";

function getArea(request: Request, response: Response): void {
  const reqType: RequestType = getRequestType(request);
  const responseWrapper = getGetAreaResponseWrapper(response, reqType);

  if (!request.query.prefecture) {
    responseWrapper.respondError(
      invalidParameterError("query parameter is required")
    );
    return;
  }
  areaTable
    .selectAreasByPrefecture(request.query.prefecture)
    .then((areas: Array<Area>) => {
      const getGetAreaResponse = new GetAreaResponse();
      getGetAreaResponse.setAreasList(areas);
      responseWrapper.respondSuccess(getGetAreaResponse);
    })
    .catch((error: ApiException) => responseWrapper.respondError(error));
}

function postArea(request: Request, response: Response): void {
  const reqType: RequestType = getRequestType(request);
  const responseWrapper = getAddAreaResponseWrapper(response, reqType);
  const requestWrapper = getAddAreaRequestWrapper(request, reqType);

  const addAreaRequest = requestWrapper.deserializeData();
  addArea(
    addAreaRequest.getAreaname(),
    addAreaRequest.getPrefecture(),
    areaTable.insertArea
  )
    .then((res: AddAreaResponse) => responseWrapper.respondSuccess(res))
    .catch((error: ApiException) => responseWrapper.respondError(error));
}

export function provideAreaRouter(): Router {
  const router = Router();
  router.get("/", getArea);
  router.post("/", authenticate, postArea);
  return router;
}
