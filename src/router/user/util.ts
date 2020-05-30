import { Request } from "express";
import { invalidParameterError } from "../../error/apiException";

export const getUserIdFromRequest = (request: Request): Promise<string> =>
  new Promise<string>((onResolve, onReject) => {
    const userId = request.params["id"];
    if (userId) {
      onResolve(userId);
    } else {
      onReject(invalidParameterError("user ID is required"));
    }
  });
