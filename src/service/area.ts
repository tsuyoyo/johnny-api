import { PrefectureMap, Area, City } from "../proto/area_pb";
import { AddAreaResponse, GetAreaCityResponse } from "../proto/areaService_pb";
import { GetSuggestCityResponse } from "../proto/suggestService_pb";
import * as ApiException from "../error/apiException";

// Deprecated
export async function addArea(
  areaName: string,
  prefecture: PrefectureMap[keyof PrefectureMap],
  addAreaToDatabase: (
    name: string,
    prefecture: PrefectureMap[keyof PrefectureMap]
  ) => Promise<Area>
): Promise<AddAreaResponse> {
  return new Promise<AddAreaResponse>((onResolve, onReject) => {
    addAreaToDatabase(areaName, prefecture).then((area: Area) => {
      const response = new AddAreaResponse();
      response.setArea(area);
      onResolve(response);
    });
    // .catch((error: ApiException) => onReject(error));
  });
}

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

function normalizeZipCodeToQuery(zipCode: string): string {
  let normalized = zipCode;
  if (normalized.length > 3) {
    const zipCode1 = normalized.slice(0, 3);
    const zipCode2 = normalized.slice(3, normalized.length);
    normalized = `${zipCode1}-${zipCode2}`;
  }
  return normalized;
}

function validateZipCode(zipCode: string): boolean {
  return zipCode && zipCode.length >= 4 && zipCode.match(/^\d{4,7}$/) !== null;
}

export async function getCitiesSuggestionByZipCode(
  zipCode: string,
  selectCities: (zipCode: string) => Promise<Array<City>>
): Promise<GetSuggestCityResponse> {
  return new Promise<string>((onResolve, onReject) => {
    if (!validateZipCode(zipCode)) {
      onReject(ApiException.invalidParameterError("Invalid zipCode"));
    }
    onResolve(normalizeZipCodeToQuery(zipCode));
  })
    .then((normalizedZipCode: string) => selectCities(normalizedZipCode))
    .then((cities: City[]) => {
      const res = new GetSuggestCityResponse();
      res.setCitiesList(cities);
      return res;
    });
}
