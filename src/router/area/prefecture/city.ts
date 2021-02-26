import { Request, Response, Router } from "express";
import * as areaService from "../../../service/area";
import * as areaDb from "../../../database/address";
import { pj } from "johnny-proto";
import { ResponseHandler } from "../../../response/handler";
import * as ApiException from "../../../error/apiException";

import GetAreaCityResponse = pj.sakuchin.percussion.proto.GetAreaCityResponse

function handleGetCityRequest(request: Request, response: Response): void {
  const prefectureId = request.query["id"].toString();
  const responseWrapper = new ResponseHandler<GetAreaCityResponse>(
    request, response, GetAreaCityResponse.encode
  );
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
