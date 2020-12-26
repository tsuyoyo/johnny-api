import { pj } from "../proto/compiled";
import proto = pj.sakuchin.percussion.proto;

export class ApiException extends Error {
  readonly apiError: proto.PercussionApiError.ErrorCode;
  readonly statusCode: number;

  constructor(
    apiError: proto.PercussionApiError.ErrorCode,
    message: string,
    statusCode: number
  ) {
    super(message);
    this.apiError = apiError;
    this.statusCode = statusCode;
  }
}

export function invalidParameterError(msg: string): ApiException {
  return new ApiException(
    proto.PercussionApiError.ErrorCode.INVALID_PARAMETER,
    msg,
    403
  );
}

export function noTokenError(msg: string): ApiException {
  return new ApiException(proto.PercussionApiError.ErrorCode.NO_TOKEN, msg, 401);
}

export function authorizationError(msg: string): ApiException {
  return new ApiException(
    proto.PercussionApiError.ErrorCode.INVALID_FIREBASE_TOKEN,
    msg,
    404
  );
}

export function authenticationError(msg: string): ApiException {
  return new ApiException(
    proto.PercussionApiError.ErrorCode.AUTHENTICATION_ERROR,
    msg,
    404
  );
}
