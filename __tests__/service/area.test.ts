import * as areaService from "../../src/service/area";
import {
  AddAreaResponse,
  AddAreaRequest,
} from "../../src/proto/areaService_pb";
import { Area, Prefecture } from "../../src/proto/area_pb";
import { ApiException } from "../../src/error/apiException";
import { PercussionApiError } from "../../src/proto/error_pb";

describe("area", function() {
  const expectedArea = new Area();
  expectedArea.setId(123);
  expectedArea.setName("dummy area");
  expectedArea.setPrefecture(Prefecture.IBARAKI);

  const dummyRequest = new AddAreaRequest();
  dummyRequest.setAreaname(expectedArea.getName());
  dummyRequest.setPrefecture(expectedArea.getPrefecture());

  describe("when it succeeds to add area to database", function () {
    const expectedResponse = new AddAreaResponse();
    expectedResponse.setArea(expectedArea);

    const mockedAddAreaToDatabase = jest.fn();
    mockedAddAreaToDatabase.mockReturnValueOnce(
      new Promise<Area>((onResolve) => onResolve(expectedArea))
    );

    it("should get AddAreaResponse with added Area data", async function () {
      await expect(
        areaService.addArea(
          dummyRequest.getAreaname(),
          dummyRequest.getPrefecture(),
          mockedAddAreaToDatabase
        )
      ).resolves.toEqual(expectedResponse);
    });
  });

  describe("when it fails to add area to database", function () {
    const expectedError = new ApiException(
      PercussionApiError.ErrorCode.DB_ERROR,
      "test success",
      123
    );

    const mockedAddAreaToDatabase = jest.fn();
    mockedAddAreaToDatabase.mockReturnValueOnce(
      new Promise<Area>((onResolve, onReject) => onReject(expectedError))
    );

    it("should get AddAreaResponse with added Area data", async function () {
      await expect(
        areaService.addArea(
          dummyRequest.getAreaname(),
          dummyRequest.getPrefecture(),
          mockedAddAreaToDatabase
        )
      ).rejects.toThrow(expectedError);
    });
  });
});
