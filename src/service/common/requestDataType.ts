import { Request } from "express";

export enum RequestType {
  JSON,
  PROTOBUF
}

export function getRequestType(request: Request): RequestType {
  const contentType = request.headers["content-type"].toLowerCase();
  if (contentType.includes("application/protobuf")) {
    return RequestType.PROTOBUF;
  } else if (contentType.includes("application/json")) {
    return RequestType.JSON;
  } else {
    return RequestType.JSON;
  }
}
