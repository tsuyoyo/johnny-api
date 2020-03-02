import { Response } from "express";
import { RequestType } from "./requestDataType";
import { Message } from "google-protobuf";
import { ApiException } from "../error/apiException";
import respondError from "../error/responsdError";

export function convertResponseDataForRequestType(
  data: Message,
  requestType: RequestType
): object {
  switch (requestType) {
    case RequestType.JSON:
      return data.toObject(false);
    case RequestType.PROTOBUF:
      return Buffer.from(data.serializeBinary());
  }
}

export class ResponseWrapper<T extends Message> {
  private response: Response;
  private requestType: RequestType;

  constructor(response: Response, requestType: RequestType) {
    this.response = response;
    this.requestType = requestType;
  }

  public respondSuccess(message: T): void {
    this.response
      .status(200)
      .contentType("application/x-protobuf")
      .send(convertResponseDataForRequestType(message, this.requestType));
  }

  public respondError(apiException: ApiException): void {
    console.log(`Error - ${apiException.apiError} : ${apiException.message}`);
    respondError(this.response, apiException, this.requestType);
  }
}
