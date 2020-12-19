import { City } from "../proto/area_pb";
import { GetAreaCityResponse } from "../proto/areaService_pb";
import { GetSuggestCityResponse } from "../proto/suggestService_pb";
import * as ApiException from "../error/apiException";

export async function getCitiesByPrefecture(
  prefecture: string,
  selectCities: (prefectureId: string) => Promise<Array<City>>
): Promise<GetAreaCityResponse> {
  return selectCities(prefecture).then((cities: Array<City>) => {
    const response = new GetAreaCityResponse();
    response.setCitiesList(cities);
    return response;
  });
}

function validateZipCode(zipCode: string): boolean {
  return zipCode && zipCode.length > 0 && zipCode.match(/^\d{1,7}$/) !== null;
}

export async function getCitiesSuggestionByZipCode(
  zipCode: string,
  selectCities: (zipCode: string) => Promise<Array<City>>
): Promise<GetSuggestCityResponse> {
  return new Promise<string>((onResolve, onReject) => {
    if (!validateZipCode(zipCode)) {
      onReject(ApiException.invalidParameterError("Invalid zipCode"));
    }
    onResolve(zipCode);
  })
    .then((normalizedZipCode: string) => selectCities(normalizedZipCode))
    .then((cities: City[]) => {
      const res = new GetSuggestCityResponse();
      res.setCitiesList(cities);
      return res;
    });
}
