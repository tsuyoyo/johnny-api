import { describe, it } from "mocha";
import { assert } from "chai";
import {
  getRequestType,
  RequestType
} from "../../../src/gateway/requestDataType";

describe("requestDataType", function() {
  describe("#getRequestType()", function() {
    it("should return PROTOBUF when contentType is application/protobuf", function() {
      const requestType = getRequestType("application/protobuf");
      assert.equal(requestType, RequestType.PROTOBUF);
    });
    it("should return JSON when contentType is application/json", function() {
      const requestType = getRequestType("application/json");
      assert.equal(requestType, RequestType.JSON);
    });
    it("should return JSON when contentType is other strings", function() {
      const requestType = getRequestType("dummy");
      assert.equal(requestType, RequestType.JSON);
    });
  });
});
