import { Response } from "express";
import { PercussionApiError } from "../proto/error_pb";
import { RequestType } from "./requestDataType";
import { Message } from "google-protobuf";
import { ApiException } from "../error/apiException";

export class ResponseWrapper<T extends Message> {
  private response: Response;
  private requestType: RequestType;

  constructor(response: Response, requestType: RequestType) {
    this.response = response;
    this.requestType = requestType;
  }

  private convertResponseDataForRequestType(data: Message): object {
    switch (this.requestType) {
      case RequestType.JSON:
        return data.toObject(false);
      case RequestType.PROTOBUF:
        return Buffer.from(data.serializeBinary());
    }
  }

  public respondSuccess(message: T): void {
    this.response
      .status(200)
      .contentType("application/x-protobuf")
      .send(this.convertResponseDataForRequestType(message));
  }

  public respondError(apiException: ApiException): void {
    const apiError = new PercussionApiError();
    apiError.setMessage(apiException.message);
    apiError.setErrorcode(apiException.apiError);

    console.log(`ResponseError`);
    console.log(`  Message - ${apiError.getMessage()}`);
    console.log(`  ErrorCode - ${apiError.getErrorcode()}`);

    this.response
      .status(apiException.statusCode)
      .send(this.convertResponseDataForRequestType(apiError));
  }
}
