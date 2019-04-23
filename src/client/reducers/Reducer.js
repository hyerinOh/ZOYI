export const initialState = {
  searchValue: ''
};

export default function Reducer(state = initialState, action) {
  const { type, countryInfo } = action;

  switch(type) {
    case 'SEARCH_COUNTRY':
      return {
        ...state,
        searchValue: countryInfo
      };
    default:
      return state;
  }
}
