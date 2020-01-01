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
