import { Request } from "express";
import { Message } from "google-protobuf";
import { RequestType } from "../common/requestDataType";
import { plainToClass } from "class-transformer";
import {
  SignupUserResponse,
  SignupUserRequest
} from "../../proto/userService_pb";

export class RequestWrapper<T extends Message> {
  private request: Request;
  private requestType: RequestType;
  private deserialize: (Uint8Array) => T;
  private fromObject: (object) => T;

  constructor(
    request: Request,
    requestType: RequestType,
    deserialize: (Uint8Array) => T,
    fromObject: (jsObject: object) => T
  ) {
    this.request = request;
    this.requestType = requestType;
    this.deserialize = deserialize;
    this.fromObject = fromObject;
  }

  getAccessToken(): string {
    return (
      this.request.body.token ||
      this.request.query.token ||
      this.request.headers["x-access-token"]
    );
  }

  deserializeData(): T {
    switch (this.requestType) {
      case RequestType.JSON:
        return this.fromObject(this.request.body);
      case RequestType.PROTOBUF:
        return this.deserialize(Buffer.from(this.request.body));
    }
  }
}
