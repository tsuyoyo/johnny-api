import { getRequestType, RequestType } from "../../src/gateway/requestDataType";

describe("requestDataType", function() {
  describe("#getRequestType()", function() {
    it("should return PROTOBUF when contentType is application/protobuf", function() {
      const requestType = getRequestType("application/protobuf");
      expect(requestType).toBe(RequestType.PROTOBUF);
    });
    it("should return JSON when contentType is application/json", function() {
      const requestType = getRequestType("application/json");
      expect(requestType).toBe(RequestType.JSON);
    });
    it("should return JSON when contentType is other strings", function() {
      const requestType = getRequestType("dummy");
      expect(requestType).toBe(RequestType.JSON);
    });
  });
});
