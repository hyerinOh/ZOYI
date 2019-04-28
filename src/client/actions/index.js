import * as types from './ActionTypes';

export const searchCountryAction = (searchValue) => {
  return {
    type: types.SEARCH_COUNTRY,
    searchValue: searchValue
  };
}

export const setAscending = (field) => {
  return {
    type: types.ASCENDING,
    field
  }
}

export const setDescending = (field, countryLists) => {
  return {
    type: types.DESCENDING,
    field,
    countryLists: countryLists
  }
}

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
