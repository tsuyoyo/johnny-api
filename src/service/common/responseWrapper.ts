import { Response } from "express";
import { PercussionApiError } from "../../proto/error_pb";
import { RequestType } from "../common/requestDataType";
import { Message } from "google-protobuf";

export class ResponseWrapper<T extends Message> {
  private response: Response;
  private requestType: RequestType;

  constructor(response: Response, requestType: RequestType) {
    this.response = response;
    this.requestType = requestType;
  }

  convertResponseDataForRequestType(data: Message): object {
    switch (this.requestType) {
      case RequestType.JSON:
        console.log(`object - ${JSON.stringify(data.toObject(false))}`);
        return data.toObject(false);
      case RequestType.PROTOBUF:
        return Buffer.from(data.serializeBinary());
    }
  }

  public respondSuccess(message: T): void {
    this.response
      .status(200)
      .send(this.convertResponseDataForRequestType(message));
  }

  public respondError(apiError: PercussionApiError, statusCode: number): void {
    this.response
      .status(statusCode)
      .send(this.convertResponseDataForRequestType(apiError));
  }

  public makeApiErrorAndRespond(
    code: PercussionApiError.ErrorCodeMap[keyof PercussionApiError.ErrorCodeMap],
    message: string,
    statusCode: number
  ): void {
    const apiError = new PercussionApiError();
    apiError.setMessage(message);
    apiError.setErrorcode(code);
    this.respondError(apiError, statusCode);
  }
}
