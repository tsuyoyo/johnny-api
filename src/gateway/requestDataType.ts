import { Request } from "express";

// Deprecated (Stop using it to avoid complexity)
export enum RequestType {
  JSON,
  PROTOBUF,
}

// Deprecated (Stop using it to avoid complexity)
export function getRequestType(request: Request): RequestType {
  const contentType = request.headers["x-api-request-type"];
  if (contentType.includes("application/protobuf")) {
    return RequestType.PROTOBUF;
  } else if (contentType.includes("application/json")) {
    return RequestType.JSON;
  } else {
    return RequestType.JSON;
  }
}
