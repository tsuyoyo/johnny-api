import { ResponseWrapper } from "./responseWrapper";
import { RequestWrapper } from "./requestWrapper";
import {
  AddAreaRequest,
  AddAreaResponse,
  GetAreaResponse
} from "../proto/areaService_pb";
import { RequestType } from "./requestDataType";
import { Request, Response } from "express";

function convertObjectToAddAreaRequest(obj: object): AddAreaRequest {
  const req = new AddAreaRequest();
  console.log(`aaaaa - ${JSON.stringify(obj)}`);
  req.setAreaname(obj["areaName"]);
  req.setPrefecture(obj["prefecture"]);
  return req;
}

export function getAddAreaRequestWrapper(
  request: Request,
  requestType: RequestType
): RequestWrapper<AddAreaRequest> {
  return new RequestWrapper<AddAreaRequest>(
    request,
    requestType,
    AddAreaRequest.deserializeBinary,
    convertObjectToAddAreaRequest
  );
}

export function getAddAreaResponseWrapper(
  response: Response,
  requestType: RequestType
): ResponseWrapper<AddAreaResponse> {
  return new ResponseWrapper<AddAreaResponse>(response, requestType);
}

export function getGetAreaResponseWrapper(
  response: Response,
  requestType: RequestType
): ResponseWrapper<GetAreaResponse> {
  return new ResponseWrapper<GetAreaResponse>(response, requestType);
}
