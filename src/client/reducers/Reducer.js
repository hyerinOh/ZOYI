export const initialState = {
  searchValue: '',
  countryNameSorting:'asc',
  countryCodeSorting: 'asc',
  countryCallingCodeSorting: 'asc',
  countryCapital: 'asc',
  countryRegion: 'asc',
  countryLists: []
};

export default function Reducer(state = initialState, action) {
  const { type, fields, searchValue, countryNameSorting, countryCodeSorting,countryLists } = action;

  switch(type) {
    case 'SEARCH_COUNTRY':
      return {
        ...state,
        searchValue: searchValue
      };
    case 'ASCENDING':
      switch(fields) {
        case 'COUNTRYNAME':
          return {
            ...state,
            countryNameSorting: 'asc'
          };
        case 'COUNTRYCODE':
          return {
            ...state,
            countryCodeSorting: 'asc'
          };
        case 'COUNTRYCALLINGCODE':
          return {
            ...state,
            countryCallingCodeSorting: 'asc'
          };
        case 'COUNTRYCAPITAL':
          return {
            ...state,
            countryCapital: 'asc'
          };
        case 'COUNTRYREGION':
          return {
            ...state,
            countryRegion: 'asc'
          };
      };
    case 'DESCENDING':
      switch (fields) {
        case 'COUNTRYNAME':
          return {
            ...state,
            countryLists: [
              countryLists.slice().sort(function(a,b) {
                return a.name > b.name ? -1 : a.name < b.name ? 1 : 0;
              })
            ]
            ,
            countryNameSorting: 'dsc'
          };
        case 'COUNTRYCODE':
          [...state.countryLists];
          state.countryLists.sort((a,b) => {
            return b[alpha2Code] - a[alpha2Code]; 
          })
          return {
            ...state,
            countryLists: state.countryLists,
            countryCodeSorting: 'dsc'
          };
        case 'COUNTRYCALLINGCODE':
          return {
            ...state,
            countryCallingCodeSorting: 'dsc'
          };
        case 'COUNTRYCAPITAL':
          return {
            ...state,
            countryCapital: 'dsc'
          };
        case 'COUNTRYREGION':
          return {
            ...state,
            countryRegion: 'dsc'
          };
      }
    // case 'COUNTRYNAMESORTING':
    //   return {
    //     ...state,
    //     countryNameSorting: countryNameSorting
    //   };
    // case 'COUNTRYCODESORTING':
    //   return {
    //     ...state,
    //     countryCodeSorting: countryCodeSorting
    //   };
    case 'COUNTRYLIST':
      return {
        ...state,
        countryLists: countryLists
      }
    default:
      return state;
  }
}
