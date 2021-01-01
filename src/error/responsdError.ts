import { Response } from "express";
import { ApiException } from "../error/apiException";
import * as base64 from "base64-arraybuffer";
import { pj } from "johnny-proto";
import proto = pj.sakuchin.percussion.proto;

export function respondError(
  response: Response,
  apiException: ApiException
): void {
  const apiError = new proto.PercussionApiError({
    message: apiException.message,
    errorCode: apiException.apiError,
  });
  console.log(
    `ResponseError : errorCode = ${apiError.errorCode} message = ${apiError.message}`
  );
  response
    .status(apiException.statusCode)
    .send(base64.encode(proto.PercussionApiError.encode(apiError).finish()));
}
