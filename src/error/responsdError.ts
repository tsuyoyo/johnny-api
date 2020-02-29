import { Response } from "express";
import { ApiException } from "../error/apiException";
import { PercussionApiError } from "../proto/error_pb";
import { RequestType } from "../gateway/requestDataType";
import { convertResponseDataForRequestType } from "../gateway/responseWrapper";
export default function respondError(
  response: Response,
  apiException: ApiException,
  requestType: RequestType
): void {
  const apiError = new PercussionApiError();
  apiError.setMessage(apiException.message);
  apiError.setErrorcode(apiException.apiError);
  console.log(
    `ResponseError : errorCode = ${apiError.getErrorcode()} message = ${apiError.getMessage()}`
  );
  response
    .status(apiException.statusCode)
    .send(convertResponseDataForRequestType(apiError, requestType));
}
