
import * as express from "express";
import * as mysqlService from "../database/mysqlService";
import { ApiError, ErrorCode } from "../../error/apiError";
import * as admin from 'firebase-admin';
import { User } from '../../model/user';

export function signupUser(
    auth: admin.auth.Auth,
    request: express.Request,
    response: express.Response,
    next: express.NextFunction
): void {
    console.log('signupUser - 1');
    var token = request.body.token || request.query.token || request.headers['x-access-token'];
    if (!token) {
        response.status(401)
            .send(new ApiError(ErrorCode.NO_TOKEN, 'Valid firebase token is necessary at sign-in'));
        return;
    }
    auth.verifyIdToken(token)
        .then((decodedToken: admin.auth.DecodedIdToken) => auth.getUser(decodedToken.uid))
        .then(function(userRecord: admin.auth.UserRecord) {
            const user = new User(
                userRecord.uid,
                userRecord.displayName,
                userRecord.photoURL || ''
            );
            mysqlService.addUser(
                user,
                userRecord.email,
                (result: object) => response.status(200).send(user),
                (error: ApiError) => response.status(401).send(error)
            );
        })
        .catch(function(error) {
            response.status(403)
                .send(new ApiError(ErrorCode.INVALID_FIREBASE_TOKEN, 'Invalid firebase token'));
        });
}

