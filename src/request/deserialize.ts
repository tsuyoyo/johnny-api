import { Request } from "express";
import { getRequestType, RequestType } from "./type";

export default function <T>(
  request: Request,
  fromBinary: (Uint8Array) => T,
  fromJson: (object) => T
): T {
  const requestType = getRequestType(request);
  if (requestType == RequestType.PROTOBUF) {
    return fromBinary(Buffer.from(request.body));
  } else {
    return fromJson(request.body);
  }
}
