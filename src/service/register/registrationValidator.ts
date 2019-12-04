import * as express from "express";
import { ApiError } from "../../error/ApiError";

export function validateRegisterUserRequest(
    request: express.Request,
    response: express.Response,
    next: express.NextFunction
): void {
    console.log('Validator');
    if (!request.body.name) {
        response.status(403).send(new JohnnyApiException(111, "No name"));
    } else if (!request.body.mail) {
        response.status(403).send(new JohnnyApiException(111, "No mail"));
    } else {
        next();
    };
}