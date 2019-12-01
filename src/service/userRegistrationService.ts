import * as express from "express";
import * as mysqlService from "./mysqlService";

// TODO : DIを考慮 & UnitTest & validationを挟む (middleware?)
export function addUser(
    request: express.Request,
    response: express.Response,
    next: express.NextFunction
): void {
    const name = request.body.name;
    const mail = request.body.mail;
    if (!name) {
      next(new Error('No name'));
      return;
    }
    if (!mail) {
      next(new Error('No mail'));
      return;
    }
    const onSuccess = (result: object) => response.send("OK");
    const onError = (error: object) => next(error);

    mysqlService.addUser(name, mail, onSuccess, onError);
}