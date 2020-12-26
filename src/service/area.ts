import { pj } from "../proto/compiled";
import * as ApiException from "../error/apiException";

import proto = pj.sakuchin.percussion.proto;

export async function getCitiesByPrefecture(
  prefecture: string,
  selectCities: (prefectureId: string) => Promise<Array<proto.ICity>>
): Promise<proto.GetAreaCityResponse> {
  return selectCities(prefecture).then((cities: Array<proto.ICity>) => {
    const response = new proto.GetAreaCityResponse({
      cities: cities,
    });
    return response;
  });
}

function validateZipCode(zipCode: string): boolean {
  return zipCode && zipCode.length > 0 && zipCode.match(/^\d{1,7}$/) !== null;
}

export async function getCitiesSuggestionByZipCode(
  zipCode: string,
  selectCities: (zipCode: string) => Promise<Array<proto.ICity>>
): Promise<proto.GetSuggestCityResponse> {
  return new Promise<string>((onResolve, onReject) => {
    if (!validateZipCode(zipCode)) {
      onReject(ApiException.invalidParameterError("Invalid zipCode"));
    }
    onResolve(zipCode);
  })
    .then((normalizedZipCode: string) => selectCities(normalizedZipCode))
    .then((cities: proto.ICity[]) => {
      const res = new proto.GetSuggestCityResponse({
        cities: cities,
      });
      return res;
    });
}
