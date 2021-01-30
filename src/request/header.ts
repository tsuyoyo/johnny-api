import { Request } from "express";

export function getUserId(request: Request): string {
  return request.headers["x-user-id"].toString();
}

export function getToken(request: Request) {
  return request.headers["x-api-token"].toString();
}
