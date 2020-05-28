import { Response } from "express";
import { ApiException } from "../error/apiException";
import { PercussionApiError } from "../proto/error_pb";
import * as base64 from "base64-arraybuffer";

export default function respondError(
  response: Response,
  apiException: ApiException
): void {
  const apiError = new PercussionApiError();
  apiError.setMessage(apiException.message);
  apiError.setErrorcode(apiException.apiError);
  console.log(
    `ResponseError : errorCode = ${apiError.getErrorcode()} message = ${apiError.getMessage()}`
  );
  response
    .status(apiException.statusCode)
    .send(base64.encode(apiError.serializeBinary()));
}
