export const initialState = {
  searchValue: "",
  countryNameSorting: "asc",
  countryCodeSorting: "asc",
  countryCallingCodeSorting: "asc",
  countryCapitalSorting: "asc",
  countryRegionSorting: "asc",
  countryLists: []
};

export default function Reducer(state = initialState, action) {
  const { type, fields, searchValue, countryLists, country, value } = action;

  switch (type) {
    case "SEARCH_COUNTRY":
      return {
        ...state,
        searchValue: searchValue
      };
    case "ASCENDING":
      switch (fields) {
        case "COUNTRYNAME":
          return {
            ...state,
            countryLists: countryLists.slice().sort(function(a, b) {
              return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
            }),
            countryNameSorting: "asc"
          };
        case "COUNTRYCODE":
          return {
            ...state,
            countryLists: countryLists.slice().sort(function(a, b) {
              return a.alpha2Code < b.alpha2Code
                ? -1
                : a.alpha2Code > b.alpha2Code
                ? 1
                : 0;
            }),
            countryCodeSorting: "asc"
          };
        case "COUNTRYCALLINGCODE":
          return {
            ...state,
            countryLists: countryLists.slice().sort(function(a, b) {
              return a.callingCodes[0] < b.callingCodes[0]
                ? -1
                : a.callingCodes[0] > b.callingCodes[0]
                ? 1
                : 0;
            }),
            countryCallingCodeSorting: "asc"
          };
        case "COUNTRYCAPITAL":
          return {
            ...state,
            countryLists: countryLists.slice().sort(function(a, b) {
              return a.capital < b.capital ? -1 : a.capital > b.capital ? 1 : 0;
            }),
            countryCapitalSorting: "asc"
          };
        case "COUNTRYREGION":
          return {
            ...state,
            countryLists: countryLists.slice().sort(function(a, b) {
              return a.region < b.region ? -1 : a.region > b.region ? 1 : 0;
            }),
            countryRegionSorting: "asc"
          };
      }
    case "DESCENDING":
      switch (fields) {
        case "COUNTRYNAME":
          return {
            ...state,
            countryLists: countryLists.slice().sort(function(a, b) {
              return a.name > b.name ? -1 : a.name < b.name ? 1 : 0;
            }),
            countryNameSorting: "dsc"
          };
        case "COUNTRYCODE":
          return {
            ...state,
            countryLists: countryLists.slice().sort(function(a, b) {
              return a.alpha2Code > b.alpha2Code
                ? -1
                : a.alpha2Code < b.alpha2Code
                ? 1
                : 0;
            }),
            countryCodeSorting: "dsc"
          };
        case "COUNTRYCALLINGCODE":
          return {
            ...state,
            countryLists: countryLists.slice().sort(function(a, b) {
              return a.callingCodes[0] > b.callingCodes[0]
                ? -1
                : a.callingCodes[0] < b.callingCodes[0]
                ? 1
                : 0;
            }),
            countryCallingCodeSorting: "dsc"
          };
        case "COUNTRYCAPITAL":
          return {
            ...state,
            countryLists: countryLists.slice().sort(function(a, b) {
              return a.capital > b.capital ? -1 : a.capital < b.capital ? 1 : 0;
            }),
            countryCapitalSorting: "dsc"
          };
        case "COUNTRYREGION":
          return {
            ...state,
            countryLists: countryLists.slice().sort(function(a, b) {
              return a.region > b.region ? -1 : a.region < b.region ? 1 : 0;
            }),
            countryRegionSorting: "dsc"
          };
      }
    case "COUNTRYLIST":
      return {
        ...state,
        countryLists: countryLists
      };
    case "DELETELIST":
      const copiedLists = [...state.countryLists];
      const idx = copiedLists.findIndex(list => {
        return list.name === country;
      });
      copiedLists.splice(idx, 1);
      return {
        ...state,
        countryLists: copiedLists
      };

    case "ADDLIST":
      const originLists = [...state.countryLists];
      originLists.unshift(value);
      return {
        ...state,
        countryLists: originLists
      };
    default:
      return state;
  }
}
