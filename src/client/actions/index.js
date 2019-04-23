import * as types from './ActionTypes';

export const searchCountryAction = (countryInfo) => {
  return {
      type: types.SEARCH_COUNTRY,
      countryInfo: countryInfo
  };
}

export function sorting() {
  return {
      type: types.SORTING
  };
}
