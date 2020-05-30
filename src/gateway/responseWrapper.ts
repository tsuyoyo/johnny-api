import { Response } from "express";
import { Message } from "google-protobuf";
import { ApiException } from "../error/apiException";
import respondError from "../error/responsdError";
import * as base64 from "base64-arraybuffer";

export class ResponseWrapper<T extends Message> {
  private response: Response;

  constructor(response: Response) {
    this.response = response;
  }

  public respondSuccess(message: T): void {
    this.response
      .status(200)
      .contentType("application/protobuf")
      .send(base64.encode(message.serializeBinary()));
  }

  public respondError(apiException: ApiException): void {
    console.log(`Error - ${apiException.apiError} : ${apiException.message}`);
    respondError(this.response, apiException);
  }
}
