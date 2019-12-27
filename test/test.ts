import { describe, it } from "mocha";
import { assert } from "chai";
import {
  getRequestType,
  RequestType
} from "../src/service/common/requestDataType";

describe("Array", function() {
  describe("#indexOf()", function() {
    it("should return -1 when the value is not present", function() {
      // assert.equal([1, 2, 3].indexOf(4), -1);
      const requestType = getRequestType("application/protobuf");
      assert.equal(requestType, RequestType.PROTOBUF);
    });
  });
});
