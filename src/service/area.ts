import { ApiException } from "../error/apiException";
import { PrefectureMap, Area } from "../proto/area_pb";
import { AddAreaResponse } from "../proto/areaService_pb";

export async function addArea(
  areaName: string,
  prefecture: PrefectureMap[keyof PrefectureMap],
  addAreaToDatabase: (
    name: string,
    prefecture: PrefectureMap[keyof PrefectureMap]
  ) => Promise<Area>
): Promise<AddAreaResponse> {
  return new Promise<AddAreaResponse>((onResolve, onReject) => {
    addAreaToDatabase(areaName, prefecture)
      .then((area: Area) => {
        const response = new AddAreaResponse();
        response.setArea(area);
        onResolve(response);
      })
      .catch((error: ApiException) => onReject(error));
  });
}
