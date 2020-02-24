import { PercussionApiError } from "../proto/error_pb";

export class ApiException extends Error {
  readonly apiError: PercussionApiError.ErrorCodeMap[keyof PercussionApiError.ErrorCodeMap];
  readonly statusCode: number;

  constructor(
    apiError: PercussionApiError.ErrorCodeMap[keyof PercussionApiError.ErrorCodeMap],
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
    PercussionApiError.ErrorCode.INVALID_PARAMETER,
    msg,
    403
  );
}

export function noTokenError(msg: string): ApiException {
  return new ApiException(PercussionApiError.ErrorCode.NO_TOKEN, msg, 401);
}

export function authorizationError(msg: string): ApiException {
  return new ApiException(
    PercussionApiError.ErrorCode.INVALID_FIREBASE_TOKEN,
    msg,
    404
  );
}

export function authenticationError(msg: string): ApiException {
  return new ApiException(
    PercussionApiError.ErrorCode.AUTHENTICATION_ERROR,
    msg,
    404
  );
}
