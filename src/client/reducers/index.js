import Reducer from "./Reducer";
import FormReducer from "./FormReducer";
import { combineReducers } from "redux";
const reducers = {
  Reducer,
  form: FormReducer
};

export default combineReducers(reducers);
