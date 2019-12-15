import * as express from "express";
import { ApiError } from "../../error/apiError";

export function validateRegisterUserRequest(
    request: express.Request,
    response: express.Response,
    next: express.NextFunction
): void {
    if (!request.body.name) {
        response.status(403).send(new ApiError(111, "No name"));
    } else if (!request.body.mail) {
        response.status(403).send(new ApiError(111, "No mail"));
    } else {
        next();
    };
}