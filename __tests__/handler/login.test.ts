import * as loginService from "../../src/service/login";
import { pj } from "johnny-proto";
import proto = pj.sakuchin.percussion.proto;
import { FirebaseUser } from "../../src/firebase/verify";
import * as target from "../../src/handler/login";

describe("login", () => {
    let spyLogin;

    describe("when loginService returns success", () => {
        const request = new proto.PostLoginRequest({});
        const response = new proto.PostLoginResponse({});
        const verifyToken = jest.fn();
        let result;

        function mockLoginService(
            _request: proto.IPostLoginRequest, 
            _verifyFirebaseToken: (token: string) => Promise<FirebaseUser>
        ) {
            return new Promise<proto.IPostLoginResponse>((onResolve, onReject) => {
                onResolve(response)
            })
        }
        beforeEach(() => {
            spyLogin = jest.spyOn(loginService, 'login')
                .mockImplementation(mockLoginService);

            result = expect(target.login(request, verifyToken)).resolves
        })
        it("should return response instance", () => {
            result.toMatchObject(response)
        })
        it("should call login service by input values", () => {
            expect(spyLogin.mock.calls.length).toBe(1)
            expect(spyLogin.mock.calls[0][0]).toBe(request)
            expect(spyLogin.mock.calls[0][1]).toBe(verifyToken)
        })
        afterEach(() => {
            jest.clearAllMocks();
        })
    })

    describe("when loginService throws exception", () => {
        const request = new proto.PostLoginRequest({});
        const error = { error: "aaa" };
        const verifyToken = jest.fn();
        let result;

        function mockLoginService(
            _request: proto.IPostLoginRequest, 
            _verifyFirebaseToken: (token: string) => Promise<FirebaseUser>
        ) {
            return new Promise<proto.IPostLoginResponse>((onResolve, onReject) => {
                onReject(error)
            })
        }
        beforeEach(() => {
            spyLogin = jest.spyOn(loginService, 'login')
                .mockImplementation(mockLoginService);

            result = expect(target.login(request, verifyToken)).resolves
        })
        it("should throw error which was thrown by login service", () => {
            result.toMatchObject(error)
        })
        afterEach(() => {
            jest.clearAllMocks();
        })
    })
})