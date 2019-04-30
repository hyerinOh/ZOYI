import Reducer from "./Reducer";
import { reducer as formReducer } from "redux-form";
import { combineReducers } from "redux";

const reducers = {
  Reducer,
  form: formReducer
};

const reducer = combineReducers(reducers);

export default reducer;
