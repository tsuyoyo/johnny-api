import { Request } from "express";
import { RequestType, getRequestType } from "../../src/request/type";

describe("getRequestType", function () {
  describe("header contains application/protobuf", function () {
    const request = ({
      headers: {
        "x-api-request-type": ["application/protobuf"],
      },
    } as unknown) as Request;

    it("should return PROTOBUF", function () {
      expect(getRequestType(request)).toBe(RequestType.PROTOBUF);
    });
  });

  describe("header contains application/protobuf", function () {
    const request = ({
      headers: {
        "x-api-request-type": ["application/json"],
      },
    } as unknown) as Request;

    it("should return JSON", function () {
      expect(getRequestType(request)).toBe(RequestType.JSON);
    });
  });

  describe("header contains neither protobuf nor json", function () {
    const request = ({
      headers: {
        "x-api-request-type": [],
      },
    } as unknown) as Request;

    it("should return JSON", function () {
      expect(getRequestType(request)).toBe(RequestType.JSON);
    });
  });
});
