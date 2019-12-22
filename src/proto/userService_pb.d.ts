// package: pj.sakuchin.percussion.proto
// file: proto/userService.proto

import * as jspb from "google-protobuf";
import * as proto_user_pb from "../proto/user_pb";

export class SignupUserRequest extends jspb.Message {
  getToken(): string;
  setToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignupUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SignupUserRequest): SignupUserRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SignupUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignupUserRequest;
  static deserializeBinaryFromReader(message: SignupUserRequest, reader: jspb.BinaryReader): SignupUserRequest;
}

export namespace SignupUserRequest {
  export type AsObject = {
    token: string,
  }
}

export class SignupUserResponse extends jspb.Message {
  hasUser(): boolean;
  clearUser(): void;
  getUser(): proto_user_pb.User | undefined;
  setUser(value?: proto_user_pb.User): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignupUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SignupUserResponse): SignupUserResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SignupUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignupUserResponse;
  static deserializeBinaryFromReader(message: SignupUserResponse, reader: jspb.BinaryReader): SignupUserResponse;
}

export namespace SignupUserResponse {
  export type AsObject = {
    user?: proto_user_pb.User.AsObject,
  }
}

