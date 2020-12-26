import { Request, Response } from "express";
import { Message } from "google-protobuf";
import { ApiException } from "../error/apiException";
import respondError from "../error/responsdError";
import * as base64 from "base64-arraybuffer";
import { RequestType } from "../request/type";
import { getRequestType } from "../request/type";
import * as $protobuf from "protobufjs";

export class ResponseHandler<T> {
  private response: Response;
  private requestType: RequestType;
  private toBinary: (message: T) => $protobuf.Writer;

  constructor(
    request: Request,
    response: Response,
    toBinary: (message: T) => $protobuf.Writer
  ) {
    this.response = response;
    this.requestType = getRequestType(request);
    this.toBinary = toBinary;
  }

  public respondSuccess(message: T): void {
    if (this.requestType == RequestType.PROTOBUF) {
      this.response
        .status(200)
        .contentType("application/protobuf")
        .send(base64.encode(this.toBinary(message).finish()));
    } else {
      // toJson、message.toJson()でしか呼べない
      // toObjectが使えるかもしれないのでやりながら調べる
      // this.response
      // .status(200)
      // .contentType("application/json")
      // .send(message.toJson());
    }
  }

  public respondError(apiException: ApiException): void {
    console.log(`Error - ${apiException.apiError} : ${apiException.message}`);
    respondError(this.response, apiException);
  }
}
