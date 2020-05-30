import { Request, Response, Router } from "express";
import * as areaService from "../../../service/area";
import * as areaDb from "../../../database/areas";
import { GetAreaCityResponse } from "../../../proto/areaService_pb";
import { ResponseWrapper } from "../../../gateway/responseWrapper";
import * as ApiException from "../../../error/apiException";

function handleGetCityRequest(request: Request, response: Response): void {
  const prefectureId = request.query["id"].toString();
  const responseWrapper = new ResponseWrapper<GetAreaCityResponse>(response);
  if (prefectureId) {
    areaService
      .getCitiesByPrefecture(prefectureId, areaDb.selectCitiesByPrefecture)
      .then((response: GetAreaCityResponse) =>
        responseWrapper.respondSuccess(response)
      );
  } else {
    responseWrapper.respondError(
      ApiException.invalidParameterError("Invalid prefecture ID")
    );
  }
}

export function provideAreaCityRouter(): Router {
  const router = Router();
  // GET /area/prefecture/{prefectureId}/cities
  router.get("/:id/city", handleGetCityRequest);
  return router;
}
