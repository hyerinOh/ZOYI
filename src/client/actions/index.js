import * as types from "./ActionTypes";

export const searchCountryAction = searchValue => {
  return {
    type: types.SEARCH_COUNTRY,
    searchValue: searchValue
  };
};

export const setAscending = (fields, countryLists) => {
  return {
    type: types.ASCENDING,
    fields,
    countryLists: countryLists
  };
};

export const setDescending = (fields, countryLists) => {
  return {
    type: types.DESCENDING,
    fields,
    countryLists: countryLists
  };
};

// export function countryNameSorting(sortingType) {
//   return {
//     type: types.COUNTRYNAMESORTING,
//     countryNameSorting: sortingType
//   };
// }

// export function countryCodeSorting(sortingType) {
//   return {
//     type: types.COUNTRYCODESORTING,
//     countryCodeSorting: sortingType
//   }
// }

export function getCountryList(countryLists) {
  return {
    type: types.COUNTRYLIST,
    countryLists: countryLists
  };
}
