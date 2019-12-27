export enum RequestType {
  JSON,
  PROTOBUF
}

export function getRequestType(contentType: string): RequestType {
  if (contentType.toLowerCase().includes("application/protobuf")) {
    return RequestType.PROTOBUF;
  } else if (contentType.includes("application/json")) {
    return RequestType.JSON;
  } else {
    return RequestType.JSON;
  }
}
