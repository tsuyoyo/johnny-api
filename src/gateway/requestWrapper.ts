import { Request } from "express";
import { Message } from "google-protobuf";

export class RequestWrapper<T extends Message> {
  private request: Request;
  private deserialize: (Uint8Array) => T;

  constructor(request: Request, deserialize: (Uint8Array) => T) {
    this.request = request;
    this.deserialize = deserialize;
  }

  deserializeData(): T {
    return this.deserialize(Buffer.from(this.request.body));
  }
}
