import { Request, Response, Router } from "express";
import * as areaDb from "../../database/city";
import * as areaService from "../../service/area";
import * as ApiException from "../../error/apiException";
import { ResponseHandler } from "../../response/handler";
import { pj } from "johnny-proto";
import proto = pj.sakuchin.percussion.proto;

function handleGetCitySuggestionRequest(
  request: Request,
  response: Response
): void {
  const zipCode = request.query["zipCode"].toString();
  const responseWrapper = new ResponseHandler<proto.GetSuggestCityResponse>(
    request,
    response,
    proto.GetSuggestCityResponse.encode,
  );
  if (zipCode) {
    areaService
      .getCitiesSuggestionByZipCode(zipCode, areaDb.selectCitiesLikeZipCode)
      .then((response: proto.GetSuggestCityResponse) => {
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
