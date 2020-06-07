import { Request, Response, Router } from "express";
import * as areaDb from "../../database/areas";
import * as areaService from "../../service/area";
import { ResponseWrapper } from "../../gateway/responseWrapper";
import { GetSuggestCityResponse } from "../../proto/suggestService_pb";
import * as ApiException from "../../error/apiException";

function handleGetCitySuggestionRequest(
  request: Request,
  response: Response
): void {
  const zipCode = request.query["zipCode"].toString();
  const responseWrapper = new ResponseWrapper<GetSuggestCityResponse>(response);
  if (zipCode) {
    areaService
      .getCitiesSuggestionByZipCode(zipCode, areaDb.selectCitiesLikeZipCode)
      .then((response: GetSuggestCityResponse) => {
        responseWrapper.respondSuccess(response);
      })
      .catch((e: ApiException.ApiException) => {
        responseWrapper.respondError(e);
      });
  } else {
    responseWrapper.respondError(
      ApiException.invalidParameterError(`Invalid zipCode - ${zipCode}`)
    );
  }
}

export function provideSuggetionRouter(): Router {
  const router = Router();
  // GET /suggestion/city?zipCode={zipCode}
  router.get("/", handleGetCitySuggestionRequest);
  return router;
}
