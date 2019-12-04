import * as express from "express";
import * as mysqlService from "../database/mysqlService";

// TODO : DIを考慮 & UnitTest & validationを挟む (middleware?)
export function registerUser(
    request: express.Request,
    response: express.Response,
    next: express.NextFunction
): void {
    mysqlService.addUser(
        request.body.name,
        request.body.mail,
        (result: object) => response.send("OK"),
        (error: object) => next(error)
    );
}