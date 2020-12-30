import { authenticate } from "../../src/middleware/authentication";
import { ApiException } from "../../src/error/apiException";
import { pj } from "../../src/proto/compiled";
import proto = pj.sakuchin.percussion.proto;
import { mocked } from 'ts-jest/utils'
import { respondError } from "../../src/error/responsdError";
import { Request } from "express";
import { FirebaseUser } from "../../src/firebase/verify";

jest.mock("../../src/error/responsdError");

describe("authenticate", function() {
    const response = jest.fn();
    const next = jest.fn();

    beforeEach(function() {
        mocked(respondError).mockClear();
    });

    describe("header does not have enough info", function() {
        const expectedError = new ApiException(
            proto.PercussionApiError.ErrorCode.LOGIN_REQUIRED,
            "Loginしてください",
            401
        );
        describe("when token is empty", function() {
            const request = {
                headers: {
                    "x-user-id": "user",
                }
            } as unknown as Request;
    
            beforeEach(function() {
                authenticate(jest.fn())(request, response, next);
            });
            it("should call responsdError with LOGIN_REQUIRED", function() {
                expect(respondError).toBeCalledWith(response, expectedError);
            });
        });
    
        describe("when userId is empty", function() {
            const request = {
                headers: {
                    "x-api-token": "token",
                }
            } as unknown as Request;

            beforeEach(function() {            
                authenticate(jest.fn())(request, response, next);
            });
            it("should call responsdError with LOGIN_REQUIRED", function() {
                expect(respondError).toBeCalledWith(response, expectedError);
            });
        });
    });

    describe("when token is verified", function() {
        const user = new proto.User({
            id: "userId",
            name: "name",
        });
        const request = {
            headers: {
                "x-api-token": "token",
                "x-user-id": user.id,
            }
        } as unknown as Request;

        describe("when user ID is found", function() {
            const mockedVerifyToken = jest.fn()
                .mockImplementation((token: string) => {            
                    return new Promise<FirebaseUser>((onResolve) => {
                        onResolve(new FirebaseUser(user, "mail@mail.com"))
                    }
                );
            });
            beforeEach(function() {            
                authenticate(mockedVerifyToken)(request, response, next);
            });
            it("should call next", function() {
                expect(next).toBeCalledTimes(1);
            });
        });

        describe("when user ID is NOT found", function() {
            const mockedVerifyToken = jest.fn()
                .mockImplementation((token: string) => {            
                    return new Promise<FirebaseUser>((onResolve) => {
                        const differentUser = new proto.User({
                            id: "differentUser",
                            name: "aaaaa",
                        });
                        onResolve(new FirebaseUser(differentUser, "mail@mail.com"))
                    });
                });   
            const expectedError = new ApiException(
                proto.PercussionApiError.ErrorCode.AUTHENTICATION_ERROR,
                "再認証してください",
                401
            );
            beforeEach(function() {            
                authenticate(mockedVerifyToken)(request, response, next);
            });
            it("should call respondError", function() {
                expect(respondError).toBeCalledWith(response, expectedError);
            });
            it("should NOT call next", function() {
                expect(next).not.toBeCalled
            });
        });
    });

    describe("when token is NOT verified", function() {
        const request = {
            headers: {
                "x-api-token": "token",
                "x-user-id": "id",
            }
        } as unknown as Request;
        
        const mockedVerifyToken = jest.fn()
            .mockImplementation((token: string) => {            
                return new Promise<FirebaseUser>((onResolve, onReject) => {
                    onReject()
                });
            });
        
        beforeEach(function() {            
            authenticate(mockedVerifyToken)(request, response, next);
        });
        it("should call respondError", function() {
            const expectedError = new ApiException(
                proto.PercussionApiError.ErrorCode.AUTHENTICATION_ERROR,
                "再認証してください",
                401
            );
            expect(respondError).toBeCalledWith(response, expectedError);
        });
        it("should NOT call next", function() {
            expect(next).not.toBeCalled
        });
    });
});