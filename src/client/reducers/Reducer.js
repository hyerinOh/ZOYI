export const initialState = {
  searchValue: "",
  countryNameSorting: "asc",
  countryCodeSorting: "asc",
  countryCallingCodeSorting: "asc",
  countryCapital: "asc",
  countryRegion: "asc",
  countryLists: []
};

export default function Reducer(state = initialState, action) {
  const {
    type,
    fields,
    searchValue,
    countryNameSorting,
    countryCodeSorting,
    countryLists
  } = action;

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
            countryNameSorting: "asc"
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
            countryNameSorting: "asc"
          };
        case "COUNTRYCAPITAL":
          return {
            ...state,
            countryLists: countryLists.slice().sort(function(a, b) {
              return a.capital < b.capital ? -1 : a.capital > b.capital ? 1 : 0;
            }),
            countryNameSorting: "asc"
          };
        case "COUNTRYREGION":
          return {
            ...state,
            countryLists: countryLists.slice().sort(function(a, b) {
              return a.region < b.region ? -1 : a.region > b.region ? 1 : 0;
            }),
            countryNameSorting: "asc"
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
            countryNameSorting: "dsc"
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
            countryNameSorting: "dsc"
          };
        case "COUNTRYCAPITAL":
          return {
            ...state,
            countryLists: countryLists.slice().sort(function(a, b) {
              return a.capital > b.capital ? -1 : a.capital < b.capital ? 1 : 0;
            }),
            countryNameSorting: "dsc"
          };
        case "COUNTRYREGION":
          return {
            ...state,
            countryLists: countryLists.slice().sort(function(a, b) {
              return a.region > b.region ? -1 : a.region < b.region ? 1 : 0;
            }),
            countryNameSorting: "dsc"
          };
      }
    case "COUNTRYLIST":
      return {
        ...state,
        countryLists: countryLists
      };
    default:
      return state;
  }
}
